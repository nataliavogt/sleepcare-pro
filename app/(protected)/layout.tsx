import Header from '@/components/layout/Header';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-[#D4C4C0] bg-[#EADACA] py-6 text-center text-xs text-[#8B7355]">
        <p>© 2026 SleepCare Pro - Dra. Natália Vogt | CRM 53990 | RQE 4762</p>
      </footer>
    </div>
  );
}
