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
      <div className="flex items-center justify-center">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
