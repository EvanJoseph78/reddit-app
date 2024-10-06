"use client"

import { useEffect, useState } from "react";
import { MainCardPost } from "./_components/main-card-post";
import { Post } from "@prisma/client";
import { fetchPosts } from "@/services/api";

export default function Home() {

  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data)
    }).catch((error) => {
      console.error('Erro ao buscar cursos:', error);
    })

  }, [])

  return (
    <div className="space-y-4 ">
      {/* <MainCardPost */}
      {/*   userName={"EvanJoseph"} */}
      {/*   postTitle={"Rock lee vs Gaara"} */}
      {/*   votes={164} */}
      {/*   comments={1542} */}
      {/*   srcImage={"https://preview.redd.it/o7bh6ztga1td1.png?auto=webp&language=pt-BR&p=gem&s=e9a4e9ba42f8082f4adde6e4bc8d77b37a876ed6"} */}
      {/*   time={10} */}
      {/*   postDescription={"Realidade sobre o concurso da caixa: achava que o CNU estava ruim... esse da caixa é pífio. Analisei bem esse edital, não teve distribuição de vagas iguais entre os macros, foram todas as vagas para o norte e o nordeste, e pasmem, com o curso do BNB em andamento nessa região. Meu amigo trabalha na caixa, vive falando que tem acúmulo de função, um funcionário fazendo o trabalho de 3, e na realidade, abriram uma porcaria de concurso com pouca vaga e + o PDV de demissão para os funcionário.O concurso estava há 10 anos congelado galera... Era para vir umas 15 mil vagas ai brincando, trabalhar em banco não é legal, tem meta, pressão, tem que gostar ou vai ter uma vida infeliz lá dentro. Do jeito que as coisas estão, vão passar só a galera fera mesmo, que tem chances de passar em outros concursos melhores, tribunais e afins. Essa é a macro em que vou disputar 3 vagas e 1 CR para 50 municípios. 4 meses estudando p isso"} */}
      {/* ></MainCardPost> */}
      {/**/}
      {/* <MainCardPost */}
      {/*   userName={"EvanJoseph"} */}
      {/*   postTitle={"Amaterasu"} */}
      {/*   votes={164} */}
      {/*   comments={1542} */}
      {/*   // srcImage={"https://preview.redd.it/o7bh6ztga1td1.png?auto=webp&language=pt-BR&p=gem&s=e9a4e9ba42f8082f4adde6e4bc8d77b37a876ed6"} */}
      {/*   time={10} */}
      {/*   postDescription={"Realidade sobre o concurso da caixa: achava que o CNU estava ruim... esse da caixa é pífio. Analisei bem esse edital, não teve distribuição de vagas iguais entre os macros, foram todas as vagas para o norte e o nordeste, e pasmem, com o curso do BNB em andamento nessa região. Meu amigo trabalha na caixa, vive falando que tem acúmulo de função, um funcionário fazendo o trabalho de 3, e na realidade, abriram uma porcaria de concurso com pouca vaga e + o PDV de demissão para os funcionário.O concurso estava há 10 anos congelado galera... Era para vir umas 15 mil vagas ai brincando, trabalhar em banco não é legal, tem meta, pressão, tem que gostar ou vai ter uma vida infeliz lá dentro. Do jeito que as coisas estão, vão passar só a galera fera mesmo, que tem chances de passar em outros concursos melhores, tribunais e afins. Essa é a macro em que vou disputar 3 vagas e 1 CR para 50 municípios. 4 meses estudando p isso"} */}
      {/* ></MainCardPost> */}

      {posts?.map((post) => (
        <MainCardPost userName={""} postTitle={post.title} votes={0} comments={0} time={0} postDescription={post.body} srcImage={post.imageUrl}></MainCardPost>
      ))}

    </div>
  );
}
