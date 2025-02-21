import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Link className="" href="/auth">
          Clique Aqui
        </Link>
        <Button>Enviar</Button>
      </div>
    </>
  );
}
