'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/components/layout/LogoutButton';
import GenericQuestionnaireForm from '@/components/questionnaires/GenericQuestionnaireForm';
import { questionnairesMap } from '@/lib/questionnaires/definitions';

export default function QuestionnairePage() {
  const params = useParams();
  const questionnaireId = params.id as string;
  const definition = questionnairesMap[questionnaireId as keyof typeof questionnairesMap];

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [interpretation, setInterpretation] = useState('');

  if (!definition) {
    return (
      <div className="space-y-4">
        <h1 className="heading-1">Questionário não encontrado</h1>
        <Link href="/questionnaires" className="btn-primary inline-block">
          Voltar aos Questionários
        </Link>
      </div>
    );
  }

  const handleSubmit = async (
    responses: Record<string, any>,
    calculatedScore: number,
    calculatedInterpretation: string
  ) => {
    try {
      const response = await fetch('/api/questionnaires/submit-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionnaireType: questionnaireId,
          responses,
          score: calculatedScore,
          interpretation: calculatedInterpretation,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar respostas');
      }

      setScore(calculatedScore);
      setInterpretation(calculatedInterpretation);
      setSubmitted(true);
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar respostas. Por favor, tente novamente.');
    }
  };

  if (submitted && score !== null) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="heading-1">Resultado</h1>
          <LogoutButton />
        </div>

        <div className="max-w-2xl space-y-6">
          {/* Score Card */}
          <div className="card border-4" style={{ borderColor: '#C76134' }}>
            <div className="text-center space-y-4">
              <p className="text-sm text-[#8B7355]">Seu Score</p>
              <p className="text-6xl font-bold text-[#C76134]">
                {score}/{definition.maxScore}
              </p>
              <h2 className="heading-3 text-[#62210F]">{interpretation}</h2>
            </div>
          </div>

          {/* Reference */}
          <div className="card-dark text-sm text-[#8B7355]">
            <p>
              <strong>Referência:</strong> {definition.reference}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/questionnaires" className="btn-primary flex-1 text-center">
              Outro Questionário
            </Link>
            <Link href="/dashboard" className="btn-outline flex-1 text-center">
              Voltar ao Dashboard
            </Link>
          </div>

          <p className="text-xs text-[#99A8AD] text-center">
            ✓ Seu score foi enviado para nataliavogt@outlook.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-1">{definition.name}</h1>
          <p className="text-text-muted mt-2">{definition.description}</p>
        </div>
        <LogoutButton />
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Info Card */}
        <div className="card-dark">
          <h3 className="heading-3 mb-3">Sobre este Questionário</h3>
          <p className="text-sm text-[#8B7355] mb-3">
            {definition.description}
          </p>
          <p className="text-xs text-[#99A8AD]">
            <strong>Referência:</strong> {definition.reference}
          </p>
        </div>

        {/* Data */}
        <div className="card-dark">
          <p className="text-sm font-semibold text-[#62210F] mb-2">
            Data de resposta: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-xs text-[#8B7355]">
            Por favor, responda todas as perguntas com atenção. Os dados serão enviados para Dra. Natália Vogt.
          </p>
        </div>

        {/* Form */}
        <GenericQuestionnaireForm
          definition={definition}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
