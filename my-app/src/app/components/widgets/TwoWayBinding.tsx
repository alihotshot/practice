'use client'
import { useState } from "react"

const TwoWayBinding = () => {
    const [username, setUsername] = useState("")

    return (
        <div className='flex space-x-3 items-center justify-center py-10'>
            <h1 className='text-xl'>Enter Your Name : </h1>
            <form>
                <input
                    type="text"
                    className=' border-2 border-stone-600 rounded-lg'
                    placeholder="Write anything.."
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
            </form>
            <div className=" bg-slate-300 px-20 py-5 text">Your Entered : {username}</div>
        </div>
    )
}

export default TwoWayBinding