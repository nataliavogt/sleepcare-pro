export default function BrandingLogo() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Logo Placeholder - será substituído por SVG real */}
      <div className="w-24 h-24 bg-[#C76134] rounded-full flex items-center justify-center">
        <span className="text-white text-3xl font-bold">NV</span>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#62210F]">SleepCare Pro</h1>
        <p className="text-sm text-[#8B7355] mt-2 font-semibold">
          Dra. Natália Vogt
        </p>
        <p className="text-xs text-[#99A8AD] mt-1">
          CRM 53990 | RQE 4762
        </p>
        <p className="text-xs text-[#8B7355] mt-3 font-medium">
          Questionários Validados em Medicina do Sono
        </p>
      </div>
    </div>
  );
}
