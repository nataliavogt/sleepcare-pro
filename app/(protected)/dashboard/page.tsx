'use client';

import Link from 'next/link';
import LogoutButton from '@/components/layout/LogoutButton';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-1">Bem-vindo ao SleepCare Pro</h1>
          <p className="text-text-muted mt-2">
            Acompanhe sua saúde do sono com questionários validados
          </p>
        </div>
        <LogoutButton />
      </div>

      {/* Menu Principal - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Questionários */}
        <Link
          href="/questionnaires"
          className="card hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <div className="text-center space-y-4">
            <div className="text-5xl">📋</div>
            <div>
              <h3 className="heading-3">Questionários</h3>
              <p className="text-text-muted text-sm mt-2">
                Responda questionários validados sobre seu sono
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block bg-[#C76134] text-white text-xs font-semibold px-3 py-2 rounded-full">
                STOP-BANG • Epworth • PSQI • ISI
              </span>
            </div>
          </div>
        </Link>

        {/* Card 2: Diário do Sono */}
        <Link
          href="/sleep-diary"
          className="card hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <div className="text-center space-y-4">
            <div className="text-5xl">🛏️</div>
            <div>
              <h3 className="heading-3">Diário do Sono</h3>
              <p className="text-text-muted text-sm mt-2">
                Registre seus padrões de sono diariamente
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block bg-[#99A8AD] text-white text-xs font-semibold px-3 py-2 rounded-full">
                Validado em Português
              </span>
            </div>
          </div>
        </Link>

        {/* Card 3: Meu Progresso */}
        <Link
          href="/progress"
          className="card hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <div className="text-center space-y-4">
            <div className="text-5xl">📈</div>
            <div>
              <h3 className="heading-3">Meu Progresso</h3>
              <p className="text-text-muted text-sm mt-2">
                Acompanhe seus scores e evolução
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block bg-[#49401F] text-white text-xs font-semibold px-3 py-2 rounded-full">
                Histórico Completo
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Como Funciona */}
        <div className="card-dark">
          <h3 className="heading-3 mb-4">Como Usar a Plataforma</h3>
          <ol className="space-y-3 text-sm text-text-muted">
            <li className="flex gap-3">
              <span className="font-bold text-[#C76134]">1.</span>
              <span>Responda questionários validados sobre seu sono</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#C76134]">2.</span>
              <span>Preencha o diário do sono todos os dias</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#C76134]">3.</span>
              <span>Acompanhe seus scores e evolução</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#C76134]">4.</span>
              <span>Seus dados são enviados para Dra. Natália Vogt</span>
            </li>
          </ol>
        </div>

        {/* Privacidade */}
        <div className="card-dark">
          <h3 className="heading-3 mb-4">Seu Dados Estão Seguros</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex gap-3">
              <span className="text-[#49401F]">✓</span>
              <span>Criptografia de ponta a ponta</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#49401F]">✓</span>
              <span>Conformidade total com LGPD</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#49401F]">✓</span>
              <span>Acesso apenas seu e da Dra. Natália</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#49401F]">✓</span>
              <span>Autorização para pesquisa científica</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
