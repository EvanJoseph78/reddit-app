"use client"

import { ArrowLeft, Ellipsis, MenuIcon, QrCode, SearchIcon, Sidebar } from "lucide-react";
import { SearchBar } from "./search-bar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SideBar from "./sidebar";
import { useRouter } from "next/dist/client/components/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {

  const router = useRouter();
  const userInfo = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);

  // Ativa e desativa os ícones na search-bar
  const toggleSearchBar = () => {
    setIsSearchBarActive(!isSearchBarActive);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [userInfo])

  return (
    <>
      <div className="border-b border-zinc-600 py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full bg-dark-color z-50 h-16">

        {!isSearchBarActive ? (
          <div className="w-1/3 text-2xl flex items-center gap-1">

            <SideBar></SideBar>

            <Image
              alt="Upload"
              className="object-cover rounded-md"
              src={"/logo.svg"}
              width={30}
              height={30}
            ></Image>

            <p className="font-bold hidden md:block">reddit</p>

          </div>
        ) : (
          <div className="w-full text-2xl flex items-center gap-1">

            <Button variant={"rounded"} className="gap-2 hover:bg-gray-700 p-2 md:hidden flex items-center">
              <ArrowLeft onClick={toggleSearchBar} />
            </Button>

            <SearchBar></SearchBar>
          </div>
        )
        }

        <div className="w-1/3 px-8 hidden md:block">
          <SearchBar></SearchBar>
        </div>

        {!isSearchBarActive && (
          <div className="w-1/3 flex justify-end gap-2 items-center content-center">
            <Button variant={"rounded"} className="gap-2 bg-orange-600 md:bg-gray-700">
              <QrCode className="hidden md:block" />
              Baixar App
            </Button>

            {!isSearchBarActive && (
              <Button variant={"rounded"} className="gap-2 hover:bg-gray-700 p-2 md:hidden flex items-center">
                <SearchIcon onClick={toggleSearchBar} />
              </Button>
            )}

            {isLoading ? (
              <Button variant={"rounded"} className="gap-2 bg-orange-600 hidden md:block" onClick={() => { router.push("/sign-in") }}>
                <Spinner></Spinner>
              </Button>
            ) : (
              userInfo.user ? (
                <>
                  <UserButton></UserButton>
                </>

              ) : (
                <>
                  <Button variant={"rounded"} className="gap-2 bg-orange-600 hidden md:block" onClick={() => { router.push("/sign-in") }}>
                    Entrar
                  </Button>
                </>
              )
            )}


            <Button variant={"rounded"} className="gap-2 hover:bg-gray-700 p-2">
              <Ellipsis />
            </Button>

          </div>
        )}
      </div >

    </>
  );
};
