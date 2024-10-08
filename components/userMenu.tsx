"use client";
import { deleteCookie } from "cookies-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserMenu = ({ name }: any) => {
  function logOut() {
    deleteCookie("name");
    deleteCookie("token");
    location.href = "/login";
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{name}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Хэрэглэгчийн цэс</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Link href="/" className=" h-full w-full p-2">
            Түүх
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logOut}>Гарах</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
