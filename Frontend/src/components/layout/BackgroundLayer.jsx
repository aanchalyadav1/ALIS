export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Soft ambient gradients (SAFE, NON-BRANDING) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.10),transparent_45%)]" />

      {/* Very subtle noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] bg-repeat" />
    </div>
  );
}
