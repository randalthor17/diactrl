import { DefaultSession } from "next-auth";
import Image from "next/image";

// Default Session TYPE

export default function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <div className="card">
      <div className="card-body">
        <Image
          src={user?.image as string}
          alt="profile photo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p>Current Logged In User</p>
        <h5 className="card-title">{user?.name}</h5>
        <p className="card-text">{user?.email}</p>
      </div>
    </div>
  );
}
