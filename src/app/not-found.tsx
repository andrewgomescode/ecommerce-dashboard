import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl tracking-tight text-foreground">
        Página não encontrada
      </h2>
      <p className="mt-2 text-muted-foreground">
        A página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
