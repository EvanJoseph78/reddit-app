import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserIcon, Dot, SaveIcon, MenuIcon, ArrowUpFromLine, ArrowDownFromLine, MessageCircle, Bookmark, Share2 } from "lucide-react";

interface PostPageCardProps {
  username: string;
  postTitle: string;
}

export const PostPageCard = ({ username, postTitle }: PostPageCardProps) => {
  const postDescription: string = "Realidade sobre o concurso da caixa: achava que o CNU estava ruim... esse da caixa é pífio. Analisei bem esse edital, não teve distribuição de vagas iguais entre os macros, foram todas as vagas para o norte e o nordeste, e pasmem, com o curso do BNB em andamento nessa região. Meu amigo trabalha na caixa, vive falando que tem acúmulo de função, um funcionário fazendo o trabalho de 3, e na realidade, abriram uma porcaria de concurso com pouca vaga e + o PDV de demissão para os funcionário.O concurso estava há 10 anos congelado galera... Era para vir umas 15 mil vagas ai brincando, trabalhar em banco não é legal, tem meta, pressão, tem que gostar ou vai ter uma vida infeliz lá dentro. Do jeito que as coisas estão, vão passar só a galera fera mesmo, que tem chances de passar em outros concursos melhores, tribunais e afins. Essa é a macro em que vou disputar 3 vagas e 1 CR para 50 municípios. 4 meses estudando p isso "
  const srcImage: string = "https://preview.redd.it/poderiam-dizer-se-fica-pelo-menos-acima-de-70-pela-v0-0o4wp9hdwc0d1.jpeg?width=640&crop=smart&auto=webp&s=98036c0fd918e112f87a99b8166dc280d2f4640f"
  const votes: number = 10;

  return (
    <Card className="bg-dark-color text-white w-screen md:w-[900px] border-none space-y-4 px-2">
      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-2 w-full items-start">
          <div className="w-full flex content-center items-center gap-1">
            <UserIcon width={20} height={20} className="rounded-full border" />
            <div className="text-xs">{username} </div>
            <Dot />
            <p className="text-xs">Há 10 meses</p>
          </div>
          <h1 className="text-4xl">{postTitle}</h1>
          <div className="text-xs flex items-center">
            <div>{votes} votos</div>
            <Dot />
            <div>1k comentários</div>
          </div>
        </div>

        <SaveIcon />
        <MenuIcon />
      </div>

      <div>{postDescription}</div>

      <div className="w-full bg-gray-200/20 border flex justify-center rounded-xl">
        <img src={srcImage} className="w-auto h-auto max-w-full max-h-full object-cover" />
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
    </Card>
  );
}

