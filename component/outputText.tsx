"use client"

export default function ContainerOutputText({ outputText }: any) {
    return (
        <div id="display--output" style={{
            display: (outputText == "")?"none":""
        }}>
            <div dangerouslySetInnerHTML={{ __html: outputText }}></div>
        </div>
    );
}
