
import {
  Ellipsis,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation";

export function Dropdown() {

  const userInfo = useUser();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-1 bg-dark-color w-8 h-8 rounded-full border-none hover:cursor-pointer hover:bg-gray-500 transition duration-300">
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="space-x-2">
            {userInfo.user ? (
              <div className="flex items-center gap-2">
                <UserButton></UserButton>
                <span>Perfil</span>
              </div>

            ) : (
              <div onClick={() => { router.push("/sign-in") }}>
                <User className="mr-2 h-4 w-4" />
                <span>Login</span>
              </div>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {userInfo.user ? (
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <SignOutButton></SignOutButton>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
