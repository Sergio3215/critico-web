"use client"

import { useEffect, useState } from "react";
import { marked } from "marked";
import ContainerApp from "@/component/container";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <ContainerApp router={router}/>
  );
}
