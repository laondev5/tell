import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tell 1.0</h1>
    </main>
  );
}
