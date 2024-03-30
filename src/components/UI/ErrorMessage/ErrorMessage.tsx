import React from 'react';
import cl from "./ErrorMessage.module.scss"

interface ErrorMessageProps {
    text: string
}

/* a component used for rendering error messages with text provided in props  */
const ErrorMessage = ({text}: ErrorMessageProps) => {
    return (
        <div className={cl.message}>
            {text}
        </div>
    );
};

export default ErrorMessage;