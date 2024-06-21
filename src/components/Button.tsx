import React from "react";
// Event props
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    handleClick2: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <>
            <div>
                <button onClick={event => props.handleClick(event, 1)}>Click me!</button>
            </div>
            <div>
                <button onClick={event => props.handleClick2(event, 2)}>Click me too!</button>
            </div>
        </>
    )
}