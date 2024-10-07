"use cliet"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { createPost } from "@/services/api"
import { useUser } from "@clerk/nextjs"
import { TabsContent } from "@radix-ui/react-tabs"
import { PlusIcon } from "lucide-react"
import { useState } from "react"

export function CreatePostButton() {

  const [postTitle, setPostTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [isImage, setIsImage] = useState(false)

  const { user } = useUser();

  const fetchCreatePost = async (title: string, body: string, imageUrl: string) => {
    try {
      // Chama a função createPost com os parâmetros userClerkId, username e email
      if (user) {
        const userClerkId = user.id;
        const username = user.username || "username";
        const useremail = user.primaryEmailAddress?.emailAddress || "user@email.com";
        const post = await createPost(userClerkId, username, useremail, title, body, imageUrl);
      }
    } catch (error) {
      // Tratamento de erro no caso de falha na criação do post
      console.error("Error while creating post:", error);
    }
  }

  const handleCreatePost = async () => {

    // Aqui você pode adicionar a lógica para enviar o post criado, como uma requisição para uma API.
    if (isImage) {
      console.log({
        postTitle,
        urlImg,
      });

      fetchCreatePost(postTitle, "", urlImg);

    } else {
      console.log({
        postTitle,
        postDescription,
      });
      fetchCreatePost(postTitle, postDescription, "");
    }
  };

  const handleValueChange = (value: string) => {
    if (value === "image") {
      setIsImage(true);
    } else {
      setIsImage(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="bg-gray-700 text-white rounded-2xl border-none">
        <Button variant="outline" className="flex gap-2"><PlusIcon />Criar Post</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Criar post</AlertDialogTitle>
          <AlertDialogDescription className="flex justify-center">
            <Tabs className="w-full" defaultValue="text" onValueChange={(value) => { handleValueChange(value) }}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="text">Texto</TabsTrigger>
                <TabsTrigger value="image">Imagem</TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="flex flex-col gap-4">
                <Input
                  id="titlepost"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Título do post"
                />
                <Textarea
                  id="postDescription"
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                  placeholder="Descrição do post"
                />
              </TabsContent>

              <TabsContent value="image" className="flex flex-col gap-4">
                <Input
                  id="title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Título do post"
                />
                <Input
                  id="urlImg"
                  value={urlImg}
                  onChange={(e) => setUrlImg(e.target.value)}
                  placeholder="URL da imagem"
                />
              </TabsContent>
            </Tabs>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleCreatePost}>Criar post</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
