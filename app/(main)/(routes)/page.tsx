import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-red-600">
        Radhe Radhe
      </p>
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  )
}
