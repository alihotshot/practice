import { FC } from "react"

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="text-lg font-medium rounded-full bg-teal-900 text-white px-7 py-3 shadow-xl hover:scale-105">{text}</button>
  )
}

export default Button
