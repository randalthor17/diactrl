"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Login from "./Login";
import { NavBar } from "./NavBar";

// localhost:3000

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <NavBar user={session?.user} />
      <div>
        <h3>Login Website</h3>
        <Login />
      </div>
    </>
  );
}
