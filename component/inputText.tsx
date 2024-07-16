export default function ContainerInputText({ handlerChange, isDisabled, setIsDisabled, handlerClick, inputText }: any) {


    return (
        <div className="flex flex-row">
            <div>
                <input type="url" name="urlSearch" id="url--Search" className="text-black" value={inputText} onChange={(e) => {
                    handlerChange(e.target.value);
                }} placeholder="https://serez.dev"/>
            </div>
            <div>
                <button disabled={isDisabled} onClick={() => {
                    setIsDisabled(true);
                    handlerClick();
                }}>Enviar</button>
            </div>
        </div>
    );
}