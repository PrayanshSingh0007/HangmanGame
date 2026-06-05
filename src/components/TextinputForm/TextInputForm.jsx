import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";

function TextInputForm({handleFormSubmit,inputType, handleTextInputChange, handleShowHideClick}) {

    return ( 
        <form className="flex flex-col items-start gap-4" onSubmit={handleFormSubmit}>
            
            <TextInput
             placeholder="Enter a word or phrase to guess"
             label="Enter a word or phrase to guess"
             onChange={handleTextInputChange}
             type={inputType}
              />

            <div className="flex gap-3">
            <Button text="Show/Hide" onClickHandler={handleShowHideClick} styleType="secondary" />
            </div>

            <div className="flex gap-3">
            <Button text="Submit" type="submit" styleType="success" />
            </div>
        </form>
    );
}

export default TextInputForm;