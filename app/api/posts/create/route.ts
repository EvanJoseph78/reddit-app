import { db } from "@/lib/db";
import { EmailAddress } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Função para lidar com requisições POST
export async function POST(request: NextRequest) {
  try {
    const { userClerkId, username, email, title, body, imageUrl } = await request.json(); // Obtém o userClerkId do corpo da requisição

    // Busca o usuário no banco de dados
    let user = await db.user.findUnique({
      where: {
        clerkId: userClerkId,
      },
    });

    // Verifica se o usuário existe
    if (!user) {
      user = await db.user.create({
        data: {
          clerkId: userClerkId,
          username: username,
          email: email
        }
      })
    }

    const newPost = await db.post.create({
      data: {
        title: title,
        body: body,
        imageUrl: imageUrl
      }
    })

    // Se o usuário for encontrado, você pode retornar os dados do usuário
    return NextResponse.json(user, { status: 200 }); // Retorna os dados do usuário

  } catch (error) {
    console.error("Error fetching user:", error);
    // Retorna uma mensagem de erro com status 500
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Busca todos os usuários no banco de dados
    const posts = await db.post.findMany();

    // Retorna os usuários em formato JSON com status 200
    return NextResponse.json(posts, { status: 200 });

  } catch (error) {
    console.error("Error fetching users:", error);
    // Retorna uma mensagem de erro com status 500
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
