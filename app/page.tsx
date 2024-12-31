import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";

const Home = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return <UserButton showName />;
};

export default Home;
