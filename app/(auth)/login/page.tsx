'use client';

import BrandingLogo from '@/components/shared/BrandingLogo';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <BrandingLogo />

      <div className="card">
        <h2 className="heading-3 mb-6 text-center">
          Criar Conta ou Acessar
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
