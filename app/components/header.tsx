import Image from "next/image";
import logo from "@/public/prejeto/logo.jpg";
import logoUniceplac from "@/public/prejeto/logo-uniceplac.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-purple-900 w-full py-6 flex justify-between items-center relative p-8">
      <div className="flex items-center">
        <Image src={logoUniceplac} alt="logo Uniceplac" width={100} height={100}/>
        <div className="text-white">Projeto</div>
      </div>
      <div className="flex flex-col items-center">
        <Image src={logo} alt="Logo FinanQuest" width={60} height={60} className="mb-2" />
        <div className="flex gap-2 text-white tracking-[0.1em] text-lg mb-2">
          {"FINANQUEST".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>
      <Link href="https://www.uniceplac.edu.br/">
        <Button className="hover:bg-white hover:text-black">Website</Button>
      </Link>
    </header>
  );
}