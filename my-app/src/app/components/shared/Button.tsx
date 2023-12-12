import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button>{text}</button>
  )
}

export default Button
