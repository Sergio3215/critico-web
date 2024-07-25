"use client"
import { useAi } from "@/context/aiContext";
import { marked } from "marked";
import { useEffect, useState } from "react";

export default function ContainerOutputText({ outputText, isDisabled, setIsDisabled, setOutputText, route }: any) {

    const { handlerAiStream }: any = useAi();

    useEffect(() => {
        handlerLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outputText]);

    const handlerLoad = async () => {
        if (route !== undefined) {
            setIsDisabled(true);
            let txt: any = "";
            try {
                // const ftch = await fetch(`${location.origin}/api/evaluate-web?url=https://${location.pathname.replace("/", "")}`);
                // const res = await ftch.json();
                // txt = marked.parse(res.message);
                let str = "";
                const stream = await handlerAiStream(`https://${location.pathname.replace("/", "")}`);
                for await (let part of stream) {
                    str += part;
                    setOutputText(marked.parse(str));
                }
                setIsDisabled(false);
            } catch (error) {
                console.log(error);
                txt = "No has agregado una URL valida!";
                setOutputText(txt);
                setIsDisabled(false);
            }
        }
    }

    return (
        <>
            {
                route == undefined ?
                    <>

                    </>
                    :
                    isDisabled ?
                        <>
                            <div id="cargando--display">
                                <div>
                                    <h1 id="label--principal">Cargando...</h1>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div id="display--output" style={{
                                display: (outputText == "") ? "none" : ""
                            }}>
                                <div dangerouslySetInnerHTML={{ __html: outputText.replaceAll(":", "").replaceAll("https//", "https://") }}></div>
                            </div>
                        </>
            }
        </>
    );
}
