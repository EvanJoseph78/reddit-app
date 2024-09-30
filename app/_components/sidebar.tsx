"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, GamepadIcon, Home, HomeIcon, MenuIcon, TrendingUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import NavbarItem from "./navbar-item";

// Componente Sidebar
const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Adicione um ref para o botão

  // Função para abrir e fechar a sidebar
  const toggleSideBar = () => setIsSideBarOpen(prev => !prev);

  // Função para fechar a sidebar ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    // Verifica se o clique foi fora da sidebar e do botão
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Button
        ref={buttonRef} // Adicione a referência ao botão
        variant="rounded"
        onClick={toggleSideBar}
        className="p-2 hover:bg-gray-700/50 text-white block md:hidden"
      >
        <MenuIcon />
      </Button>

      <div
        ref={sidebarRef}
        className={`fixed top-16 left-0 h-full border-r border-zinc-500 text-white p-4 transition-transform transform ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 h-full py-4 bg-dark-color`}
        aria-hidden={!isSideBarOpen}
      >
        <NavbarItem name="Página inicial" route="home" icon={<HomeIcon />} />
        <NavbarItem name="Popular" route="popular" icon={<TrendingUp></TrendingUp>} />
        <div className="border-b border-gray-600 my-2"></div>

      </div>
    </div>
  );
};

export default SideBar;
