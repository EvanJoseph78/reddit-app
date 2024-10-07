
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "./ui/textarea"

export function PostTabs() {
  return (
    <Tabs defaultValue="text" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="text">Texto</TabsTrigger>
        <TabsTrigger value="image">Imagem</TabsTrigger>
      </TabsList>
      <TabsContent value="text">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1 py-4">
              {/* <Label htmlFor="name">Name</Label> */}
              <Input id="name" defaultValue="" placeholder="Título do post" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Descrição do texto</Label>
              <Textarea id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="image">
        evan
      </TabsContent>
    </Tabs>
  )
}
