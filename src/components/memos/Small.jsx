import { memo } from "react"


export const Small = memo(({value}) => {
    console.log('Se llamó')
    return (
        <small>{value}</small>
  )
}
)
