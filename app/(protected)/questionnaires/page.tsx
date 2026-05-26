'use client';

import Link from 'next/link';
import LogoutButton from '@/components/layout/LogoutButton';

const questionnaires = [
  {
    id: 'stop-bang',
    name: 'STOP-BANG',
    description: 'Avaliação de risco de apneia obstrutiva do sono',
    reference: 'Chung et al. (2016)',
    maxScore: 8,
    emoji: '⏹️',
  },
  {
    id: 'epworth',
    name: 'Escala de Sonolência de Epworth',
    description: 'Avaliação de sonolência diurna excessiva',
    reference: 'Johns (1991)',
    maxScore: 24,
    emoji: '😴',
  },
  {
    id: 'psqi',
    name: 'Índice de Qualidade do Sono de Pittsburgh (PSQI)',
    description: 'Avaliação abrangente da qualidade do sono',
    reference: 'Buysse et al. (1989)',
    maxScore: 21,
    emoji: '🌙',
  },
  {
    id: 'isi',
    name: 'Índice de Severidade de Insônia (ISI)',
    description: 'Avaliação da severidade da insônia',
    reference: 'Bastien et al. (2001)',
    maxScore: 28,
    emoji: '🔴',
  },
];

export default function QuestionnairesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-1">Questionários Validados</h1>
          <p className="text-text-muted mt-2">
            Selecione um questionário para começar
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questionnaires.map((q) => (
          <Link
            key={q.id}
            href={`/questionnaires/${q.id}`}
            className="card hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="space-y-3">
              <div className="text-4xl">{q.emoji}</div>
              <h3 className="heading-3">{q.name}</h3>
              <p className="text-text-muted text-sm">{q.description}</p>
              <div className="flex items-center justify-between pt-2 border-t border-[#D4C4C0]">
                <span className="text-xs text-[#99A8AD]">{q.reference}</span>
                <span className="text-xs font-semibold text-[#C76134]">
                  Máx: {q.maxScore} pontos
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          <strong>ℹ️ Todos os questionários são validados</strong> e baseados em literatura científica consolidada.
          Seus dados serão enviados para Dra. Natália Vogt por email.
        </p>
      </div>
    </div>
  );
}
