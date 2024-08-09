import React from "react";
import { CtaTypes } from "~/enums/CtaTypes";

interface ButtonProps { 
    text: string;
    type: CtaTypes;
    isSubmit?: boolean;
}

export default function Button({ text, type, isSubmit =false}:ButtonProps) {
    let buttonClass= '';
    switch(type){
        case CtaTypes.PRIMARY:
            buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white';
            break;
        case CtaTypes.SECONDARY:
            buttonClass = 'bg-green-500 hover:bg-green-700 text-white';
            break;
        case CtaTypes.DISABLED:
            buttonClass = 'bg-gray-400 text-white cursor-not-allowed';
            break;
        default:
            buttonClass = 'bg-gray-500 text-white';
    }
    
    return (
        <button
        type={isSubmit ? 'submit' : 'button'}
        className={`${buttonClass} font-bold py-2 px-4 rounded`}
        disabled= {type ===CtaTypes.DISABLED}
        >
            {text}
        </button>

    );
}