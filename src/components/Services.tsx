const services = [
  "AI Solutions",
  "Data Engineering",
  "Web Development",
  "DevOps",
  "Cloud Services",
  "Automation Testing",
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-bold">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-slate-800 p-6"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}