
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Função para lidar com requisições GET
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
