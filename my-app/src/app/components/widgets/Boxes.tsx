
const coreBoxes: { header: string, description: string, number: number }[] = [
    {
        header: 'Quarter I',
        description: 'CS-101: Object-Oriented Programming using Typescript.',
        number: 1
    },
    {
        header: 'Quarter II',
        description: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        number: 2
    },
    {
        header: 'Quarter III',
        description: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        number: 3
    }
]

const Boxes = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6">
            <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row">
                {
                    coreBoxes.map((item, index) => {
                        return (
                            <div className="flex-1 border rounded-lg px-8 py-12 relative">
                                <h4 className=" font-semibold text-lg">{item.header}</h4>
                                <p className=" text-slate-600 mt-2">{item.description}</p>
                                <span key={index} className="text-9xl right-10 font-bold opacity-10 absolute top-4">{index + 1}</span>
                            </div>
                        )
                    })
                }
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>

    )
}

export default Boxes
