import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { AiContext } from "./aiContext";

export default function AiProvider({ children }: any) {

    const handlerAiStream = async (url: string) => {
        process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY;

        let stream;

        try {
            const response = await fetch(url);
            const html = await response.text();
            const cleanHtml = html.substring(0, 15000);

            stream = await streamText({
                model: google("models/gemini-3-flash-preview"),
                prompt: `Ahora vos sos un critico web, por ende vas a tener que evaluar SEO, Performance, Best Practice, Accesibility y PWA y vas a dar consejos de como mejorar la website y el diseño, mostra puntajes con estrellas amarillas y añadir la cagoria puntaje. Comproba que la web exista y no de status 500, y si no existe y da status 500, dile que ingrese una valida, si vas a hacer enlaces, haz enlaces en su propia 

            ACTÚA COMO: Un Auditor Técnico Web Senior y Experto en UX/UI.
            OBJETIVO: Analizar el código fuente proporcionado de una página web.

            INSTRUCCIONES ESTRICTAS:
            1. Analiza SOLAMENTE el código HTML proporcionado abajo. No inventes    características que no ves en el código.
            2. Si no ves una etiqueta <meta description>, di que falta. Si no ves un    atributo 'alt' en las imágenes, penaliza.

            CATEGORÍAS A EVALUAR (1 a 5 estrellas):
            - SEO: Busca etiquetas <title>, <meta name="description">, estructura de    encabezados (h1, h2), OpenGraph.
            - Performance: Busca scripts bloqueantes, uso excesivo de divs, falta de    'loading="lazy"' en imágenes.
            - Accesibilidad: Busca atributos 'alt', 'aria-labels', contraste    (inferido),  uso de etiquetas semánticas (<main>, <nav>, <footer>).
            - Best Practices: Estructura limpia, doctype correcto, viewport meta tag.
            - PWA: Busca 'manifest.json' linkeado o registros de service worker.
            
            La pagina web (HTML) es ${cleanHtml} correspondiente al url ${url}
    `
            });

        } catch (error) {
            stream = await streamText({
                model: google("models/gemini-3-flash-preview"),
                prompt: `Ahora vos sos un critico web, por ende vas a tener que evaluar SEO, Performance, Best Practice, Accesibility y PWA y vas a dar consejos de como mejorar la website y el diseño, mostra puntajes con estrellas amarillas y añadir la cagoria puntaje. Comproba que la web exista y no de status 500, y si no existe y da status 500, dile que ingrese una valida, si vas a hacer enlaces, haz enlaces en su propia 

            ACTÚA COMO: Un Auditor Técnico Web Senior y Experto en UX/UI.
            OBJETIVO: Analizar el código fuente proporcionado de una página web.

            INSTRUCCIONES ESTRICTAS:
            1. Analiza SOLAMENTE el código HTML proporcionado abajo. No inventes    características que no ves en el código.
            2. Si no ves una etiqueta <meta description>, di que falta. Si no ves un    atributo 'alt' en las imágenes, penaliza.

            CATEGORÍAS A EVALUAR (1 a 5 estrellas):
            - SEO: Busca etiquetas <title>, <meta name="description">, estructura de    encabezados (h1, h2), OpenGraph.
            - Performance: Busca scripts bloqueantes, uso excesivo de divs, falta de    'loading="lazy"' en imágenes.
            - Accesibilidad: Busca atributos 'alt', 'aria-labels', contraste    (inferido),  uso de etiquetas semánticas (<main>, <nav>, <footer>).
            - Best Practices: Estructura limpia, doctype correcto, viewport meta tag.
            - PWA: Busca 'manifest.json' linkeado o registros de service worker.
            
            La pagina web es ${url}
    `
            });
        }


        return stream.textStream;
    }

    return (
        <AiContext.Provider value={{ handlerAiStream }}>
            {children}
        </AiContext.Provider>
    )
}