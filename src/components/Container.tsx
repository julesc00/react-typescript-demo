// Style props
import React from "react"

type ContainerProps = {
    styles: React.CSSProperties,
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
    // {border: "1px solid black", padding: "1rem"}
    return (
        <div style={props.styles}>
            {props.children}
        </div>
    )
}
