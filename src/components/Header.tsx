import { Home, Sheet } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./theme/ThemeToggle";
import AccountMenu from "./AccountMenu";
import Logo from "@/../../public/LogoTektus.png";
import Image from "next/image";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Image src={Logo} alt="Tektus Logo" width={32} />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink href="/orders">
            <Sheet className="h-4 w-4" />
            Clientes
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
