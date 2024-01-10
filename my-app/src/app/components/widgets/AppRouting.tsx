// Dynamic Routing : We also call it "App Routing" 
'use client'
import { useState } from "react"
import Button from "../shared/Button"
import axios from "axios"

const AppRouting = () => {
    const [users, setusers] = useState([])
    const getUsers = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(data)
    }

    return (
        <div className="">
            <div className="">
                <button onClick={getUsers} className="text-lg font-medium rounded-full bg-teal-900 text-white px-7 py-3 shadow-xl hover:scale-105">Get Data</button>
            </div>
            <div className="bg-slate-300 text-xl p-2 my-5 max-w-xs">
                Data is: {
                    users.map((e) => {
                        return (
                            <li>{e.}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppRouting
