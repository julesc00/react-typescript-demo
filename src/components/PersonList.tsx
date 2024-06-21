import { Name } from "./Person.types"

type NamesProp = {
    names: Name[]
}

export const PersonList = (props: NamesProp) => {
    return (
        <div>
            {
                props.names.map(name => {
                    return (
                        <h2 key={name.first}>
                            {name.first} {name.last}
                        </h2>
                    )
                })
            }
        </div>
    )
}