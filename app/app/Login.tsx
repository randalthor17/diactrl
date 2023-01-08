"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "./userCard";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          type="button"
          className="bg-blue-500 px-10 py-5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
        >
          Sign out from Google
        </button>
        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <button
        onClick={() => signIn()}
        type="button"
        className="bg-blue-500 px-10 py-5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
      >
        Sign in with Google
      </button>
    );
  }
}
