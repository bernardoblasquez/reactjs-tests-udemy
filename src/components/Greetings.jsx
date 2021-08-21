import { useState } from "react";
import Output from "./Output";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true)
    }

    return(
        <div>
            <h2> Olá Putos </h2>           
            {!changedText && <Output>Um texto aleatorio</Output> }
            {changedText && <p>Mudado</p> }

        <button onClick={changeTextHandler}></button>
        </div>
    )
}

export default Greetings;