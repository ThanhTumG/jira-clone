import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 p-10 justify-center items-center">
      <Button disabled size={"lg"} variant={"primary"}>
        Primary
      </Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button className="text-shadow-muted-foreground" variant={"destructive"}>
        Destructure
      </Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"tertiary"}>Tertiary</Button>
    </div>
  );
}
