"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  managerName: z.string(),
  restaurantName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});
type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp() {
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Parceiro cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate.push("/signin"),
        },
      });
    } catch {
      toast.error("Erro ao realizar o cadastrar.");
    }
  }

  return (
    <>
      <Toaster richColors />
      <div className="p-8">
        <Button variant={"default"} asChild className="absolute right-8 top-8">
          <Link href="/signin">Fazer Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome completo</Label>
              <Input
                required
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                required
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input required id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input required id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <Link className="underline underline-offset-4" href="">
                Termos de serviço
              </Link>{" "}
              e{" "}
              <Link className="underline underline-offset-4" href="">
                políticas de privacidade
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
