'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="btn-outline text-sm py-2"
    >
      Sair
    </button>
  );
}
