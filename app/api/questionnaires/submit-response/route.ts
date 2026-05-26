import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { sendScoreEmail } from '@/lib/email/send-score';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      questionnaireType,
      responses,
      score,
      interpretation,
      patientName,
      patientEmail,
    } = body;

    // Validações
    if (!questionnaireType || score === undefined) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      );
    }

    // Salvar em Firestore
    const responsesRef = collection(db, 'questionnaire_responses');
    const docRef = await addDoc(responsesRef, {
      questionnaireType,
      responses,
      score,
      interpretation,
      respondedAt: serverTimestamp(),
      sentToEmail: true,
      patientEmail,
      patientName,
    });

    // Enviar email
    const maxScores: Record<string, number> = {
      'stop-bang': 8,
      'epworth': 24,
      'psqi': 21,
      'isi': 28,
    };

    const maxScore = maxScores[questionnaireType] || 100;

    if (patientEmail && patientName) {
      await sendScoreEmail(
        patientEmail,
        patientName,
        questionnaireType,
        score,
        maxScore,
        interpretation
      );
    }

    return NextResponse.json(
      {
        success: true,
        responseId: docRef.id,
        score,
        interpretation,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Submit response error:', error);

    return NextResponse.json(
      { error: 'Erro ao processar resposta' },
      { status: 500 }
    );
  }
}
