
import { PostCard } from "@/components/post-card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ItensTabs() {
  return (
    <Tabs defaultValue="posts" className="">
      <TabsList className="grid w-full grid-cols-3 bg-dark-color text-white justify-start">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="comunidade">Comunidade</TabsTrigger>
        <TabsTrigger value="comments">Comentários</TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="space-y-2">
        <PostCard
          userName={"evanJoseph78"}
          postTitle={"Magnus Carlsen vs Hikaru Nakamura"}
          votes={102}
          comments={1222}
          srcImage={"https://external-preview.redd.it/0Xcap_swetpjz3vjrW2tzlin9qnoBjLZpHsmBUHyBSA.jpg?width=640&crop=smart&auto=webp&s=41a03289b12c66574b495e298da9a12ec66b944e"}
          time={10}
        />

        <PostCard
          userName={"r/evanJoseph78"}
          postTitle={"Magnus Carlsen vs Hikaru Nakamura"}
          votes={102}
          comments={1222}
          srcImage={"https://preview.redd.it/magnus-carlsen-wins-todays-late-titled-tuesday-with-10-5-11-v0-092q1yy3gk4c1.png?width=399&format=png&auto=webp&s=fc06799c29a76263e2b01db675416ac16fbb4c87"}
          time={10}
        />
      </TabsContent>

      <TabsContent value="comunidade">
        <PostCard
          userName={"evanJoseph78"}
          postTitle={"Magnus Carlsen vs Hikaru Nakamura"}
          votes={102}
          comments={1222}
          srcImage={"https://external-preview.redd.it/0Xcap_swetpjz3vjrW2tzlin9qnoBjLZpHsmBUHyBSA.jpg?width=640&crop=smart&auto=webp&s=41a03289b12c66574b495e298da9a12ec66b944e"}
          time={10}
        />
      </TabsContent>

      <TabsContent value="comments">
        <PostCard
          userName={"evanJoseph78"}
          postTitle={"Magnus Carlsen vs Hikaru Nakamura"}
          votes={102}
          comments={1222}
          srcImage={"https://external-preview.redd.it/0Xcap_swetpjz3vjrW2tzlin9qnoBjLZpHsmBUHyBSA.jpg?width=640&crop=smart&auto=webp&s=41a03289b12c66574b495e298da9a12ec66b944e"}
          time={10}
        />
      </TabsContent>


    </Tabs>
  )
}
