export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Subtle circuit glow */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/eye_bg.png)" }}
      />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_45%)]" />
    </div>
  );
}
