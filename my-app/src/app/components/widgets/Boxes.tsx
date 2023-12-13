
const coreBoxes: { header: string, description: string, number: number }[] = [
    {
        header: 'Quarter I',
        description: 'CS-101: Object-Oriented Programming using Typescript.',
        number: 1
    }
]

const Boxes = () => {
    return (
        <div>
            {
                coreBoxes.map((item) => {
                    return (
                        <div className="max-w-screen-xl mx-auto relative">
                            <h4 className=" font-semibold text-lg">Quarter I</h4>
                            <p className=" text-slate-500 ">CS-101: Object-Oriented Programming using Typescript.</p>
                            <span className="text-8xl font-sans font-bold opacity-10 absolute top-4 ">1</span>
                        </div>
                    )
                })
            }
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    )
}

export default Boxes
