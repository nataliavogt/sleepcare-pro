'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-[#D4C4C0] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C76134] rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">NV</span>
          </div>
          <div>
            <p className="font-bold text-[#62210F]">SleepCare Pro</p>
            <p className="text-xs text-[#8B7355]">Medicina do Sono</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/dashboard" className="text-[#62210F] hover:text-[#C76134] font-semibold">
            Dashboard
          </Link>
          <Link href="/questionnaires" className="text-[#62210F] hover:text-[#C76134] font-semibold">
            Questionários
          </Link>
          <Link href="/sleep-diary" className="text-[#62210F] hover:text-[#C76134] font-semibold">
            Diário
          </Link>
          <Link href="/progress" className="text-[#62210F] hover:text-[#C76134] font-semibold">
            Progresso
          </Link>
        </nav>
      </div>
    </header>
  );
}
