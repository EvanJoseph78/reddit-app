"use client"

import { useEffect, useState } from "react";
import { MainCardPost } from "./_components/main-card-post";
import { Post } from "@prisma/client";
import { fetchPosts } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Home() {

  const [posts, setPosts] = useState<Post[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data)
      setIsLoading(false)
    }).catch((error) => {
      console.error('Erro ao buscar cursos:', error);
    })

  }, [])

  return (
    <div className="space-y-4 ">
      {isLoading ? (
        <>
          <MainCardPost.skeleton></MainCardPost.skeleton>
          <MainCardPost.skeleton></MainCardPost.skeleton>
          <MainCardPost.skeleton></MainCardPost.skeleton>
        </>
      ) : (
        posts?.map((post) => (
          <MainCardPost
            key={post.id}
            userName=""
            postTitle={post.title}
            votes={0}
            comments={0}
            time={0}
            postDescription={post.body}
            srcImage={post.imageUrl}
          />
        ))
      )}

    </div>
  );
}
