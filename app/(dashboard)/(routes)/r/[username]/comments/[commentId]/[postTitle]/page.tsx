import { PostPageCard } from "@/app/_components/post-page-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDownFromLine, ArrowUpFromLine, Bookmark, Dot, MenuIcon, MessageCircle, SaveIcon, Share2, UserIcon } from "lucide-react";

interface PostPageProps {
  params: {
    username: string;
    commentId: string;
    postTitle: string;
  };
};


export default function PostPage({ params }: PostPageProps) {

  const postDescription: string = "Realidade sobre o concurso da caixa: achava que o CNU estava ruim... esse da caixa é pífio. Analisei bem esse edital, não teve distribuição de vagas iguais entre os macros, foram todas as vagas para o norte e o nordeste, e pasmem, com o curso do BNB em andamento nessa região. Meu amigo trabalha na caixa, vive falando que tem acúmulo de função, um funcionário fazendo o trabalho de 3, e na realidade, abriram uma porcaria de concurso com pouca vaga e + o PDV de demissão para os funcionário.O concurso estava há 10 anos congelado galera... Era para vir umas 15 mil vagas ai brincando, trabalhar em banco não é legal, tem meta, pressão, tem que gostar ou vai ter uma vida infeliz lá dentro. Do jeito que as coisas estão, vão passar só a galera fera mesmo, que tem chances de passar em outros concursos melhores, tribunais e afins. Essa é a macro em que vou disputar 3 vagas e 1 CR para 50 municípios. 4 meses estudando p isso "
  const srcImage: string = "https://preview.redd.it/poderiam-dizer-se-fica-pelo-menos-acima-de-70-pela-v0-0o4wp9hdwc0d1.jpeg?width=640&crop=smart&auto=webp&s=98036c0fd918e112f87a99b8166dc280d2f4640f"
  const votes: number = 10;

  return (
    <>
      <PostPageCard username={params.username} postTitle={params.postTitle}></PostPageCard>
    </>
  );
}
