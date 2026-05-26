'use client';

import LogoutButton from '@/components/layout/LogoutButton';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-1">Meu Progresso</h1>
          <p className="text-text-muted mt-2">
            Acompanhe seus scores e evolução
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="max-w-4xl space-y-6">
        <div className="card">
          <h3 className="heading-3 mb-4">Histórico de Scores</h3>
          <p className="text-text-muted">
            Nenhum questionário respondido ainda. Comece respondendo um dos questionários!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['STOP-BANG', 'Epworth', 'PSQI', 'ISI'].map((name) => (
            <div key={name} className="card-dark text-center">
              <p className="text-xs text-[#99A8AD] mb-2">{name}</p>
              <p className="text-2xl font-bold text-[#C76134]">—</p>
              <p className="text-xs text-[#8B7355] mt-2">Sem dados</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
