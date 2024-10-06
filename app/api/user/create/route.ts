import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// criar um novo usuário no banco de dados
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Pega o corpo da requisição
    const { id, username, email, first_name, last_name } = await req.json();

    // Cria um novo usuário no banco de dados
    const newUser = await db.user.create({
      data: {
        clerkId: id,
        username: username,
        email: email,
        firstName: first_name,
        lastName: last_name,
      }
    });

    // Retorna uma resposta de sucesso
    return new NextResponse("User created", { status: 200 });

  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// Função para lidar com requisições GET
export async function GET() {
  try {
    // Busca todos os usuários no banco de dados
    const users = await db.user.findMany();

    // Retorna os usuários em formato JSON com status 200
    return NextResponse.json(users[0].id, { status: 200 });

  } catch (error) {
    console.error("Error fetching users:", error);
    // Retorna uma mensagem de erro com status 500
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
