export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
      <div>
        <h1 className="mb-4 text-6xl font-bold">
          Zantrix Technologies
        </h1>

        <p className="mb-6 text-2xl text-cyan-400">
          Ideas into Reality
        </p>

        <p className="mx-auto max-w-3xl text-slate-300">
          AI Solutions, Data Engineering, Web Development,
          DevOps, Cloud and Quality Engineering.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}