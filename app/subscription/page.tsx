import React from "react";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function SubscriptionPage() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
    </>
  );
}
