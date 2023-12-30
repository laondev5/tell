import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return <div>page</div>;
};

export default page;
