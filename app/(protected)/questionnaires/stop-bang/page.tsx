'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoutButton from '@/components/layout/LogoutButton';
import StopBangForm from '@/components/questionnaires/StopBangForm';
import { StopBangAnswers } from '@/lib/calculators/stop-bang';

export default function StopBangPage() {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [interpretation, setInterpretation] = useState('');

  const handleSubmit = async (
    data: StopBangAnswers,
    calculatedScore: number,
    calculatedInterpretation: string
  ) => {
    try {
      const response = await fetch('/api/questionnaires/submit-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionnaireType: 'stop-bang',
          responses: data,
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
          <h1 className="heading-1">Resultado do STOP-BANG</h1>
          <LogoutButton />
        </div>

        <div className="max-w-2xl space-y-6">
          {/* Score Card */}
          <div className="card border-4" style={{ borderColor: '#C76134' }}>
            <div className="text-center space-y-4">
              <p className="text-sm text-[#8B7355]">Seu Score</p>
              <p className="text-6xl font-bold text-[#C76134]">{score}/8</p>
              <h2 className="heading-3 text-[#62210F]">{interpretation}</h2>
            </div>
          </div>

          {/* Interpretation */}
          <div className="card-dark">
            <h3 className="heading-3 mb-4">O que significa?</h3>
            <div className="space-y-4 text-sm text-[#8B7355]">
              {score < 3 ? (
                <>
                  <p>
                    Seu resultado indica <strong>baixo risco</strong> de apneia obstrutiva do sono.
                  </p>
                  <p>
                    Mesmo assim, se você apresentar sintomas como roncos frequentes, despertares
                    noturnos ou sonolência excessiva, consulte um especialista.
                  </p>
                </>
              ) : score < 5 ? (
                <>
                  <p>
                    Seu resultado indica <strong>risco intermediário</strong> de apneia obstrutiva do sono.
                  </p>
                  <p>
                    Recomenda-se uma avaliação mais detalhada com Dra. Natália Vogt para descartar
                    apneia ou iniciar acompanhamento.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Seu resultado indica <strong>alto risco</strong> de apneia obstrutiva do sono.
                  </p>
                  <p>
                    É importante agendar uma consulta urgente com Dra. Natália Vogt para
                    investigação adicional e possível encaminhamento para polissonografia.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Reference */}
          <div className="card-dark text-sm text-[#8B7355]">
            <p>
              <strong>Referência:</strong> Chung F, Yang Y, Liao P, et al. The STOP-BANG Questionnaire:
              A Simple Validated Prediction Rule for Obstructive Sleep Apnea. Journal of Clinical Sleep
              Medicine. 2016.
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
          <h1 className="heading-1">STOP-BANG</h1>
          <p className="text-text-muted mt-2">
            Questionário de triagem para apneia obstrutiva do sono
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Info Card */}
        <div className="card-dark">
          <h3 className="heading-3 mb-3">Sobre este Questionário</h3>
          <p className="text-sm text-[#8B7355] mb-3">
            O STOP-BANG é um instrumento de triagem simples e eficaz para identificar pacientes em risco
            de apneia obstrutiva do sono. Contém 8 questões fáceis de responder.
          </p>
          <p className="text-xs text-[#99A8AD]">
            <strong>Referência:</strong> Chung et al. (2016)
          </p>
        </div>

        {/* Data e Instruções */}
        <div className="card-dark">
          <p className="text-sm font-semibold text-[#62210F] mb-2">
            Data de resposta: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-xs text-[#8B7355]">
            Por favor, responda todas as perguntas com atenção. Os dados serão enviados para Dra. Natália Vogt.
          </p>
        </div>

        {/* Form */}
        <StopBangForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
