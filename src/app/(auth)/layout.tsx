import "../globals.css";
import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/../public/LogoTektus.png";

export const metadata: Metadata = {
  title: "Cadastro - Agência Tektus",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="grid min-h-screen grid-cols-2">
        <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
          <div className="flex items-center gap-3 text-lg font-medium text-foreground">
            <Image src={Logo} alt="Agência Tektus" width={32} height={32} />

            <span className="font-semibold">Agência Tektus</span>
          </div>
          <footer className="text-sm">
            Painel do parceiro &copy; Agência Tektus -{" "}
            {new Date().getFullYear()}
          </footer>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
