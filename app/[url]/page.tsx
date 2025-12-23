"use client"

import { useEffect, useState, use } from "react";
import ContainerApp from "@/component/container";
import { useRouter } from "next/navigation";
import AiProvider from "@/context/aiProvider";

export default function UrlContainer(props: { params: Promise<{ url: string }> }) {
  const params = use(props.params);
  const router = useRouter();

  // console.log(params);

  return (
    <AiProvider>
      <ContainerApp route={params.url} router={router} />
    </AiProvider>
  );
}
