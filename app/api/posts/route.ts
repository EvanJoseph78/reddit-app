
import { db } from "@/lib/db";
import { PostInfo } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";

// Função para lidar com requisições GET
// Função para lidar com requisições GET
export async function GET() {
  try {
    // Busca todos os posts junto com as informações do usuário que fez cada post
    const posts = await db.post.findMany({
      include: {
        User: true, // Isso vai incluir os dados do usuário relacionado a cada post
      },
    });

    const p2 = posts.map(post => ({
      id: post.id,
      title: post.title,
      body: post.body,
      imageUrl: post.imageUrl,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      upvotes: post.upvotes,
      downvotes: post.downvotes,
      username: post.User?.username || 'Anonymous',
      firstName: post.User?.firstName || '',
      lastName: post.User?.lastName || ''
    }));

    // Retorna os posts com as informações dos usuários em formato JSON com status 200
    return NextResponse.json(p2, { status: 200 });

  } catch (error) {
    console.error("Error fetching posts and user data:", error);
    // Retorna uma mensagem de erro com status 500
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
