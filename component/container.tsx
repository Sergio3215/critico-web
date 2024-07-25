"use client"
import { useEffect, useState } from "react";
import ContainerInputText from "./inputText";
import ContainerOutputText from "./outputText";
import "./container.css"
import lupa from "../public/lupa.png"
import Image from "next/image";
import AiProvider from "@/context/aiProvider";

export default function ContainerApp({ route, router }: any) {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // console.log(route);
        let isUndefined_ = route == undefined
        if (!isUndefined_) {
            setInputText("https://" + route);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route])

    useEffect(() => {

    }, [inputText, outputText, isDisabled])

    const handlerChange = (value: string) => {
        setInputText(value);
    }

    const handlerClick = async () => {
        router.push(`${location.origin}/${inputText.replace("https://", "").replace("http://", "")}`);
    }

    return (
        <AiProvider>
            <main className="flex min-h-screen flex-col items-center p-16" >
                <div id={route != undefined ? "main--container--small" : "main--container"}>
                    <div className="flex">
                        <Image
                            src={lupa.src}
                            alt="Lupa de critico web"
                            width={60}
                            height={70}
                        />
                        <h1 id="label--principal">Criticador Web</h1>
                    </div>
                    <ContainerInputText inputText={inputText} handlerChange={handlerChange} handlerClick={handlerClick} setIsDisabled={setIsDisabled} isDisabled={isDisabled} />
                </div>
                <ContainerOutputText outputText={outputText} isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled} setOutputText={setOutputText} route={route} />
            </main>
        </AiProvider>
    );
}