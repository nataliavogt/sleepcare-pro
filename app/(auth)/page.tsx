'use client';

import Link from 'next/link';
import BrandingLogo from '@/components/shared/BrandingLogo';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Branding */}
      <BrandingLogo />

      {/* Conteúdo principal */}
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <p className="text-base text-[#8B7355]">
            Bem-vindo à plataforma de acompanhamento de sono
          </p>
          <p className="text-sm text-[#99A8AD]">
            Responda questionários validados e acompanhe sua evolução no sono com segurança
          </p>
        </div>

        {/* Informações de segurança */}
        <div className="bg-white border-2 border-[#D4C4C0] rounded-xl p-6 text-left">
          <h3 className="font-semibold text-[#62210F] mb-3">Seus dados estão seguros</h3>
          <ul className="text-sm text-[#8B7355] space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#C76134] font-bold">✓</span>
              <span>Dados criptografados e armazenados com segurança</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C76134] font-bold">✓</span>
              <span>Acesso exclusivo por você e Dra. Natália Vogt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C76134] font-bold">✓</span>
              <span>Conformidade total com LGPD</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href="/login"
          className="inline-block w-full btn-primary text-center"
        >
          Começar Agora
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#99A8AD] pt-4 border-t border-[#D4C4C0]">
        <p>Plataforma de medicina do sono com questionários validados</p>
      </div>
    </div>
  );
}
