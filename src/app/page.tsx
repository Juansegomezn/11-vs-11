export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="font-display text-5xl font-bold uppercase tracking-wide sm:text-7xl">
        Mejor <span className="text-home">11</span>{" "}
        <span className="text-accent">vs</span>{" "}
        <span className="text-away">11</span>
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">
        Gira la ruleta, elige a tus cracks y arma el mejor equipo de la historia.
      </p>
      <div className="grid w-full max-w-md grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface p-4 ring-2 ring-home">Local</div>
        <div className="rounded-xl bg-surface p-4 ring-2 ring-away">
          Visitante
        </div>
        <div className="col-span-2 rounded-xl bg-pitch p-6 font-semibold">
          Cancha
        </div>
      </div>
    </main>
  );
}
