import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SleepCare Pro - Medicina do Sono",
  description: "Plataforma de acompanhamento de sono com Dra. Natália Vogt",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-[#62210F] font-sans">
        {children}
      </body>
    </html>
  );
}
