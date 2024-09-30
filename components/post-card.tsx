import { Dot, UserIcon } from "lucide-react";
import { Card } from "./ui/card";

interface PostCardProps {
  userName: string;
  postTitle: string;
  votes: number;
  comments: number;
  srcImage: string;
  time: number;
}

export const PostCard = ({ userName, postTitle, votes, comments, srcImage, time }: PostCardProps) => {
  return (
    <div className="border-b border-gray-500/50 py-2">
      <Card className="bg-dark-color text-white md:w-[800px] border-none">
        <div className="flex justify-between p-2">
          <div className="flex flex-col gap-2 w-full items-start">
            <div className="w-full flex content-center items-center gap-1">
              <UserIcon width={20} height={20} className="rounded-full border" />
              <div className="text-xs">{userName} </div>
              <Dot />
              <p className="text-xs">Há {time} meses</p>
            </div>
            <h1 className="text-xl">{postTitle}</h1>
            <div className="text-xs flex items-center">
              <div>{votes} votos</div>
              <Dot />
              <div>{comments} comentários</div>
            </div>
          </div>

          <div className="w-[180px] h-[100px] overflow-hidden relative rounded-md">
            <img src={srcImage} className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </Card>
    </div>
  );
}
