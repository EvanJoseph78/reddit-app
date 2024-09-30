import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";

interface NavbarItemProps {
  name: string;
  route: string;
  icon: ReactNode; // Adiciona a propriedade `icon` que pode ser um componente React
}

const NavbarItem = ({ name, route, icon }: NavbarItemProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Hook para obter o pathname atual
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Normaliza o pathname e a route para comparar sem as barras iniciais
    const normalizedPathname = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    const normalizedRoute = route.startsWith("/") ? route.slice(1) : route;

    // Define o estado ativo com base na comparação
    setActive(normalizedPathname === normalizedRoute);
  }, [pathname, route]);

  const handleRoute = () => {
    router.push(route);
  };

  return (
    <div
      className={cn(
        "text-sm flex gap-2 hover:bg-white/25 transition duration-300 p-2 rounded-xl cursor-pointer",
        active && "bg-white/50 hover:bg-white/50"
      )}
      onClick={handleRoute}
    >
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default NavbarItem;
