import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { AiContext } from "./aiContext";

export default function AiProvider({ children }: any) {

    const handlerAiStream = async (url: string) => {
        process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY;
        const stream = await streamText({
            model: google("models/gemini-1.5-flash-latest"),
            prompt: `Ahora vos sos un critico web, por ende vas a tener que evaluar SEO, Performance, Best Practice, Accesibility y PWA y vas a dar consejos de como mejorar la website y el diseño. Comproba que la web exista y no de status 500, y si no existe y da status 500, dile que ingrese una valida, si vas a hacer enlaces, haz enlaces en su propia pagina web. La web es ${url}`
        });

        return stream.textStream;
    }

    return (
        <AiContext.Provider value={{handlerAiStream}}>
            {children}
        </AiContext.Provider>
    )
}