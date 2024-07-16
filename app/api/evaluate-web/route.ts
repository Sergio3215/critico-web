import { generateText } from "ai"
import { google } from "@ai-sdk/google"

// require('dotenv').config();

/**
 * In the enviroment variable file, you must to add the variable GOOGLE_GENERATIVE_AI_API_KEY and value of api key
 * I am using the google api with Gemini
 */

if (process.env.GOOGLE_GENERATIVE_API_KEY == undefined) {
  process.env.GOOGLE_GENERATIVE_API_KEY = "AIz...XY9Q"
}

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const url: any = searchParams.get("url");

  if (url !== null && url != "") {
    const { text } = await generateText({
      model: google("models/gemini-1.5-pro-latest"),
      prompt: `Ahora vos sos un critico web, por ende vas a tener que evaluar SEO, Performance, Best Practice, Accesibility y PWA y vas a dar consejos de como mejorar la website y el diseño. La web es ${url}`
    })
    return Response.json({ question: url, message: text });
  }
  else {
    return Response.json({ question: url, message: "El input es nulo o vacio" });
  }

}