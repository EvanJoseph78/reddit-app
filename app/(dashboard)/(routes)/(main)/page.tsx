"use client"

import { useEffect, useState } from "react";
import { MainCardPost } from "./_components/main-card-post";
import { fetchPosts } from "@/services/api";
import { PostInfo } from "@/lib/type";
import { Button } from "@/components/ui/button";

export default function Home() {

  const [posts, setPosts] = useState<PostInfo[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPosts().then((data) => {
      const sortedData = data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setPosts(sortedData)
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
            userName={post.username}
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
