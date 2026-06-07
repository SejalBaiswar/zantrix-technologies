const tech = [
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "Python",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "OpenAI",
];

export default function Technologies() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-bold">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-4">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cyan-500/10 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}