"use client"
import { useEffect, useState } from "react";
import ContainerInputText from "./inputText";
import ContainerOutputText from "./outputText";
import AiProvider from "@/context/aiProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, ScanSearch } from "lucide-react";

interface ContainerAppProps {
    route?: string;
    router: any;
}

export default function ContainerApp({ route, router }: ContainerAppProps) {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (route) {
            setInputText("https://" + route);
        }
    }, [route])

    const handlerChange = (value: string) => {
        setInputText(value);
    }

    const handlerClick = async () => {
        if (!inputText) return;
        const cleanUrl = inputText.replace(/^https?:\/\//, "");
        router.push(`${location.origin}/${cleanUrl}`);
    }

    const isResultMode = route !== undefined;

    return (
        <AiProvider>
            <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
                </div>

                <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`
                        flex flex-col items-center transition-all duration-700 ease-in-out w-full
                        ${isResultMode ? 'mt-8 md:mt-0 max-w-7xl' : 'mt-[10vh] max-w-3xl'}
                    `}
                >
                    <motion.div
                        className={`
                            relative backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12
                            flex flex-col items-center w-full z-10 overflow-hidden bg-white/5
                            ${isResultMode ? 'mb-8' : ''}
                        `}
                        initial={false}
                        animate={isResultMode ? { padding: "1.5rem" } : { padding: "3rem" }}
                    >
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 text-center md:text-left"
                            layout
                        >
                            <motion.div
                                initial={{ rotate: -180, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30"
                            >
                                <ScanSearch className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </motion.div>

                            <div>
                                <motion.h1
                                    className={`font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent tracking-tight ${isResultMode ? 'text-2xl md:text-3xl' : 'text-4xl md:text-6xl'}`}
                                    layout
                                >
                                    Criticador Web
                                </motion.h1>
                                {!isResultMode && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-blue-200/60 mt-2 text-lg font-medium"
                                    >
                                        Analiza, Optimiza y Mejora tu presencia digital
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>

                        <ContainerInputText
                            inputText={inputText}
                            handlerChange={handlerChange}
                            handlerClick={handlerClick}
                            setIsDisabled={setIsDisabled}
                            isDisabled={isDisabled}
                            compact={isResultMode}
                        />
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {isResultMode && (
                            <ContainerOutputText
                                outputText={outputText}
                                isDisabled={isDisabled}
                                setIsDisabled={setIsDisabled}
                                setOutputText={setOutputText}
                                route={route}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>
        </AiProvider>
    );
}