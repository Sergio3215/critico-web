"use client"
import { useAi } from "@/context/aiContext";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertCircle } from "lucide-react";

interface ContainerOutputTextProps {
    outputText: string;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
    setOutputText: (value: string) => void;
    route?: string;
}

export default function ContainerOutputText({ outputText, isDisabled, setIsDisabled, setOutputText, route }: ContainerOutputTextProps) {

    const { handlerAiStream }: any = useAi();

    useEffect(() => {
        handlerLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlerLoad = async () => {
        if (route !== undefined) {
            setIsDisabled(true);
            try {
                let str = "";
                const stream = await handlerAiStream(`https://${route}`);
                for await (let part of stream) {
                    str += part;
                    const parsed = await marked.parse(str);
                    setOutputText(parsed);
                }
                setIsDisabled(false);
            } catch (error) {
                console.error(error);
                setOutputText("<div class='flex items-center gap-2 text-red-300 bg-red-900/20 p-4 rounded-xl border border-red-500/20'><svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='10'></circle><line x1='12' y1='8' x2='12' y2='12'></line><line x1='12' y1='16' x2='12.01' y2='16'></line></svg><span>Error: No se pudo analizar el sitio. Verifica la URL.</span></div>");
                setIsDisabled(false);
            }
        }
    }

    if (!route) return null;

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {isDisabled && outputText === "" ? (
                <div className="flex flex-col items-center justify-center p-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl min-h-[400px]">
                    <div className="relative w-24 h-24 mb-8">
                        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping" />
                        <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                        <Sparkles className="absolute inset-0 m-auto text-blue-400 w-8 h-8 animate-pulse" />
                    </div>
                    <p className="text-2xl font-medium text-blue-100 animate-pulse text-center">Analizando tu sitio web...</p>
                    <p className="text-sm text-blue-300/60 mt-3 text-center max-w-sm">Nuestra IA está evaluando SEO, Accesibilidad y Diseño.</p>
                </div>
            ) : (
                <div className="bg-[#0b1121]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Glass gradient overlay */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:text-blue-50 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h2:mt-12
                        prose-p:text-blue-100/80 prose-p:leading-relaxed
                        prose-strong:text-blue-200 prose-strong:font-semibold
                        prose-ul:list-disc prose-ul:marker:text-blue-500
                        prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
                        prose-code:text-yellow-200 prose-code:bg-white/5 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg prose-code:font-mono
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/20 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:italic
                    ">
                        <div dangerouslySetInnerHTML={{ __html: outputText.replaceAll("https//", "https://") }} />
                    </div>
                </div>
            )}
        </motion.div>
    );
}
