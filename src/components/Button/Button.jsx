import getButtonStyling from "./ButtonStyling.js";

function Button({text, onClickHandler, styleType, type}) {
    return(

        <button 
        type={type}
        className={getButtonStyling(styleType)}
        onClick={onClickHandler}
        >

        {text}

        </button>
    )
}

export default Button;  