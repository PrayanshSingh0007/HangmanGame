import TextInputForm from './TextInputForm';
import { useState } from 'react';

function TextInputFormContainer() {

    const [inputType, setInputType] = useState();

 function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted!');
    }

    function handleTextInputChange(event) {
        console.log('Text input changed:', event.target.value);
    }

    function handleShowHideClick() {
        console.log('Show/Hide button clicked!');
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        console.log('Input type is now:', inputType);
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;