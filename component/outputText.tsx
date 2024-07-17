"use client"

export default function ContainerOutputText({ outputText, isDisabled }: any) {
    return (
        <>
            {
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
                            <div dangerouslySetInnerHTML={{ __html: outputText }}></div>
                        </div>
                    </>
            }
        </>
    );
}
