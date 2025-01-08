import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const Home = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full items-center justify-center">
        <h1>Home</h1>
        <UserButton showName />
      </div>
    </>
  );
};

export default Home;
