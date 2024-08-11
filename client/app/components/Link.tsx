import React
 from "react";
interface LinkProps {
    text: string;
    title: string;
    link: string;
    isNewTab?: boolean;
}

export default function Link({text, title, link, isNewTab =false}: LinkProps) {
    return (
        <a 
            href={link}
            title={title}
            target={isNewTab ? '_blank' : '_self'}
            rel={isNewTab ? 'noopener noreferrer' : undefined}
            className="text-blue-500 hover:underline"
        >
        {text}
         </a>
    );
}