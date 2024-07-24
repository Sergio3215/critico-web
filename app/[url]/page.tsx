"use client"

import { useEffect, useState } from "react";
import ContainerApp from "@/component/container";
import { url } from "inspector";
import { useRouter } from "next/navigation";
import AiProvider from "@/context/aiProvider";

export default function UrlContainer({ params }: { params: { url: string } }) {

  const router = useRouter();

  return (
    <AiProvider>
      <ContainerApp route={params.url} router={router} />
    </AiProvider>
  );
}
