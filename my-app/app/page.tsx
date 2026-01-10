import Image from "next/image";
import { Button } from "@/components/ui/button"; 
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex gap-5 items-center justify-center h-screen">
      <h1>Hello Duniya... Bonjour</h1>
      <Button> CLICK ME </Button>
      <UserButton/>
    </div>
  );
}
