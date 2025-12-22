"use client"
import { motion } from "framer-motion";
import { ArrowRight, Search, Loader2 } from "lucide-react";

interface ContainerInputTextProps {
    handlerChange: (value: string) => void;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
    handlerClick: () => void;
    inputText: string;
    compact?: boolean;
}

export default function ContainerInputText({ handlerChange, isDisabled, setIsDisabled, handlerClick, inputText, compact }: ContainerInputTextProps) {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isDisabled) {
            handlerClick();
        }
    }

    return (
        <motion.div
            className={`flex w-full ${compact ? 'flex-row gap-3' : 'flex-col gap-5'}`}
            layout
        >
            <div className="relative w-full group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className={`text-white/40 ${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
                </div>
                <input
                    type="url"
                    name="urlSearch"
                    id="url--Search"
                    className={`
                        w-full bg-black/20 border border-white/10 text-white placeholder-white/30 
                        backdrop-blur-sm focus:outline-none focus:border-blue-500/50 focus:bg-black/40 focus:ring-4 focus:ring-blue-500/10
                        transition-all duration-300 rounded-2xl
                        ${compact ? 'py-3 pl-10 pr-4 text-sm' : 'py-5 pl-14 pr-6 text-lg'}
                    `}
                    value={inputText}
                    onChange={(e) => handlerChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="ejemplo.com"
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isDisabled}
                onClick={handlerClick}
                className={`
                    font-semibold rounded-2xl transition-all duration-300 shadow-xl relative overflow-hidden flex items-center justify-center gap-2
                    ${isDisabled
                        ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-white/5'
                        : 'bg-white text-blue-900 hover:bg-blue-50'
                    }
                    ${compact ? 'px-6 py-3 text-sm whitespace-nowrap' : 'w-full py-5 text-lg'}
                `}
            >
                {isDisabled ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Analizando...</span>
                    </>
                ) : (
                    <>
                        <span>Analizar</span>
                        {!compact && <ArrowRight className="w-5 h-5" />}
                    </>
                )}
            </motion.button>
        </motion.div>
    );
}
