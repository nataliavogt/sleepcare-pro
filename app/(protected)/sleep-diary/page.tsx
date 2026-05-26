'use client';

import LogoutButton from '@/components/layout/LogoutButton';

export default function SleepDiaryPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-1">Diário do Sono</h1>
          <p className="text-text-muted mt-2">
            Registre seu padrão de sono diariamente
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="card">
          <h3 className="heading-3 mb-4">Novo Registro</h3>
          <button className="btn-primary">
            Preencher Diário de Hoje
          </button>
        </div>

        <div className="card">
          <h3 className="heading-3 mb-4">Seus Registros</h3>
          <p className="text-text-muted">
            Nenhum registro de sono ainda. Comece preenchendo o diário de hoje!
          </p>
        </div>
      </div>
    </div>
  );
}
