import { User } from "@clerk/nextjs/server";
import { Post } from "@prisma/client";

// Definindo o tipo PostInfo, que combina Post e User
// export type PostInfo = Post & { user: User };

export type PostInfo = {
  id: string
  title: string
  body: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  upvotes: number
  downvotes: number
  username: string
  firstName: string
  lastName: string
}
