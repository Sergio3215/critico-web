"use client"
import { marked } from "marked";
import { useEffect, useState } from "react";

export default function ContainerOutputText({ outputText, isDisabled, setIsDisabled, setOutputText, route, handlerAiStream }: any) {

    useEffect(() => {
        handlerLoad();
        addUrlParam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        addUrlParam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outputText]);

    const addUrlParam = ()=>{
        if (document.querySelector("#display--output div p a") != null) {
            document.querySelectorAll("#display--output div p a").forEach(link => {
                link.setAttribute("href", "https://" + location.pathname.replace("/", ""));
                link.textContent = "https://" + location.pathname.replace("/", "");
            })
        }
        if (document.querySelector("#display--output div h2 a") != null) {
            document.querySelectorAll("#display--output div h2 a").forEach(link => {
                link.setAttribute("href", "https://" + location.pathname.replace("/", ""));
                link.textContent = "https://" + location.pathname.replace("/", "");
            })
        }
    }

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
                    addUrlParam();
                }
                setIsDisabled(false);
                addUrlParam();
            } catch (error) {
                console.log(error);
                txt = "No has agregado una URL valido!";
                setOutputText(txt);
                setIsDisabled(false);
            }
            addUrlParam();
        }
    }

    return (
        <>
            {
                route == undefined ?
                    <>
                        <div id="display--promotional">
                            <div>
                                <h1 id="label--principal--promotional">
                                    ¡Un desafío personal!
                                </h1>
                                <h2>
                                    Probarte a ti mismo, es ver tus capacidades ocultas.
                                </h2>
                                <h3>
                                    Aprender lo que no pensabas o sabías, es descubrir algo nuevo.
                                </h3>
                                <h4>
                                    Proba tu web, es proba tu <b>Criticador Web</b>.
                                </h4>
                            </div>
                        </div>
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
                                <div dangerouslySetInnerHTML={{ __html: outputText.replaceAll(":", "") }}></div>
                            </div>
                        </>
            }
        </>
    );
}
