export default function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-10 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/eye_bg.png)" }}
    />
  );
}
