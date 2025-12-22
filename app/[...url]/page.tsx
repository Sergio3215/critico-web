"use client"

import { useEffect, useState, use } from "react";
import ContainerApp from "@/component/container";
import { useRouter } from "next/navigation";
import AiProvider from "@/context/aiProvider";

export default function UrlContainer(props: { params: Promise<{ url: string[] }> }) {
  const params = use(props.params);
  const router = useRouter();

  // Handle catch-all params which come as an array and decode them
  const rawUrl = Array.isArray(params.url) ? params.url.join('/') : params.url;
  const decodedUrl = decodeURIComponent(rawUrl);

  return (
    <AiProvider>
      <ContainerApp route={decodedUrl} router={router} />
    </AiProvider>
  );
}
