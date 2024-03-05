import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="h-[100vh] flex items-center justify-center bg-[#f1f1f3]">
      <div className="w-full max-w-[400px] text-center px-4">
        <h1 className="text-6xl">Meet tutorial</h1>
        <Input placeholder="Name" className="mt-14" />
        <Button className="w-full mt-4">New meeting</Button>
      </div>
    </main>
  );
}
