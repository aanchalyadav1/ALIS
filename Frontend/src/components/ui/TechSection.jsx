import Tech3DIcon from "./Tech3DIcon";

export default function TechSection({ title, items }) {
  return (
    <section className="space-y-10">
      <h3 className="text-2xl font-semibold text-center">
        {title}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 justify-items-center">
        {items.map((item, i) => (
          <Tech3DIcon key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
