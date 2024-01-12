// // Dynamic Routing : We also call it "App Routing" 
'use client'
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const AppRouting = () => {
    const [users, setusers] = useState([])
    const getUsers = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(data)
        console.log(data)
    }
    //used for getting data without clicking on Get Data
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="flex space-x-4 mb-5 items-center justify-center">
            <div>
                <button onClick={getUsers} className="text-lg font-medium rounded-full bg-teal-900 text-white px-7 py-3 shadow-xl hover:scale-105">Get Data</button>
            </div>
            <div className="bg-slate-300 text-xl py-3 px-10 rounded-lg">
                <h2>Received Data is:</h2>
                <ul>
                    {
                        users.map((e) => {
                            return (
                                <li>{e.username} ---- <Link href={`/${e.id}`}>Link</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default AppRouting
