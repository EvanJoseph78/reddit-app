"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowDownFromLine, ArrowUpFromLine, Bookmark, Dot, MenuIcon, MessageCircle, SaveIcon, Share2, UserIcon } from "lucide-react"
import { useEffect, useState } from "react";

interface MainCardPostPropos {
  userName: string | null;
  postTitle: string | null;
  votes: number | null;
  comments: number | null;
  srcImage?: string | null;
  time: number | null;
  postDescription: string | null;
}

export const MainCardPost = ({ userName, postTitle, votes, comments, srcImage = "", time, postDescription }: MainCardPostPropos) => {

  const [containsImage, setContainsImage] = useState(srcImage !== "");

  useEffect(() => {
    setContainsImage(srcImage !== "" && srcImage !== null);
  }, [srcImage]);

  return (

    <Card className="bg-dark-color text-white w-screen md:w-[900px] border-none space-y-4 px-2 hover:bg-gray-500/50">
      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-2 w-full items-start">
          <div className="w-full flex content-center items-center gap-1">
            <UserIcon width={20} height={20} className="rounded-full border" />
            <div className="text-xs">{userName} </div>
            <Dot />
            <p className="text-xs">Há {time} meses</p>
          </div>
          <h1 className="text-3xl">{postTitle}</h1>
          <div className="text-xs flex items-center">
            <div>{votes} votos</div>
            <Dot />
            <div>{comments} comentários</div>
          </div>
        </div>

        <SaveIcon />
        <MenuIcon />
      </div>

      {/* {postDescription} */}

      <div className="w-full flex justify-center rounded-xl">
        {containsImage ? (
          <div className="w-full bg-gray-200/20 border flex justify-center rounded-xl h-[500px]">
            {srcImage ? (
              <img
                src={srcImage}
                className="w-auto h-auto max-w-full max-h-full object-cover"
                alt="Image"
              />
            ) : (
              <p>No image available</p> // Texto ou conteúdo alternativo caso não tenha imagem
            )}
          </div>
        ) : (
          <div className="px-2">{postDescription}</div>
        )}
      </div>

      <div className="flex gap-2">
        <div className="bg-gray-700 flex justify-center content-center items-center rounded-2xl">
          <Button variant={"rounded"} className="gap-2 md:bg-gray-700 hover:text-green-500"><ArrowUpFromLine /></Button>
          <p className="text-xl">7</p>
          <Button variant={"rounded"} className="gap-2 md:bg-gray-700 hover:text-red-500"><ArrowDownFromLine /></Button>
        </div>

        <Button variant={"rounded"} className="bg-gray-700 gap-2">
          <MessageCircle className="hover:text-green-500" />
          <p className="text-xl">7</p>
        </Button>

        <Button variant={"rounded"} className="bg-gray-700 gap-2">
          <Bookmark className="hover:text-green-500" />
        </Button>

        <Button variant={"rounded"} className="bg-gray-700 gap-2">
          <Share2 className="hover:text-green-500" />
          <p className="text-md hidden md:block">compartilhar</p>
        </Button>
      </div>

      <div className="border-b border-gray-700"></div>
    </Card>
  )
}

MainCardPost.skeleton = function main() {
  return (

    <Card className="bg-dark-color text-white w-screen md:w-[900px] border-none space-y-4 px-2 hover:bg-gray-500/50">
      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-2 w-full items-start">
          <div className="w-full flex content-center items-center gap-1">

            <Skeleton className="bg-gray-700 gap-2 w-6 h-6 rounded-full" >
              <div className="text-xs"></div>
            </Skeleton>
            <Dot />

            <Skeleton className="bg-gray-700 gap-2 w-16 h-4 rounded-3xl" >
              <div className="text-xs"></div>
            </Skeleton>
          </div>

          <Skeleton className="bg-gray-700 gap-2 w-96 h-8 rounded-3xl" >
            <div className="text-xs"></div>
          </Skeleton>

          <div className="text-xs flex items-center">

            <Skeleton className="bg-gray-700 gap-2 w-16 h-4 rounded-3xl" >
              <div className="text-xs"></div>
            </Skeleton>
            <Dot />

            <Skeleton className="bg-gray-700 gap-2 w-16 h-4 rounded-3xl" >
              <div className="text-xs"></div>
            </Skeleton>
          </div>
        </div>

        <SaveIcon />
        <MenuIcon />
      </div>

      {/* {postDescription} */}

      <div className="w-full flex justify-center rounded-xl">
        <Skeleton className="bg-zinc-500 text-white w-screen md:w-[900px] border-none space-y-4 px-2 hover:bg-gray-500/50 h-[500px]" ></Skeleton>
      </div>

      <div className="flex gap-2">

        <Skeleton className="bg-gray-700 flex justify-center content-center items-center rounded-2xl">
          <Button variant={"rounded"} className="invisible gap-2 md:bg-gray-700 hover:text-green-500"><ArrowUpFromLine /></Button>
          <Skeleton className="invisible bg-gray-700 gap-2 w-6 rounded-3xl" />
          <Button variant={"rounded"} className="invisible gap-2 md:bg-gray-700 hover:text-red-500"><ArrowDownFromLine /></Button>
        </Skeleton>

        <Skeleton className="bg-gray-700 gap-2 w-16 rounded-3xl" />

        <Skeleton className="bg-gray-700 gap-2 w-14 rounded-3xl" />

        <Skeleton className="bg-gray-700 gap-2 w-32 rounded-3xl" />
      </div>

      <div className="border-b border-gray-700"></div>
    </Card>

  );
};
