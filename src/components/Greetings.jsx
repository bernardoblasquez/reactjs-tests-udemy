import { useState } from "react";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true)
    }

    return(
        <div>
            <h2> Olá Putos </h2>           
            {!changedText && <p>Um texto aleatorio</p> }
            {changedText && <p>Mudado</p> }

        <button onClick={changeTextHandler}></button>
        </div>
    )
}

export default Greetings;