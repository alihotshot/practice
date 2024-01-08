// import Wrapper from "@/app/components/widgets/CoreTracks"
import Button from "../shared/Button"
import Boxes from "./Boxes"

const CoreTracks = () => {
    const coreHeading = `Core Courses \n(Common in All Specializations):`
    return (
        <section>
            <div className="max-w-screen-xl mx-auto">
                <div className=" my-20">
                    <h4 className=" text-teal-900 font-semibold text-xl ">Program of Studies</h4>
                    <h2 className=" font-bold text-3xl whitespace-pre mt-2">{coreHeading}</h2>
                    <p className="text-slate-500 mt-4 text-lg">Every participant of the program will start by completing the following three core courses.</p>
                    <div className="mt-6">
                        <Button text={"Enroll Now"} />
                    </div>
                </div>
            </div>
            {/* Boxes */}
            <Boxes />


        </section>
    )
}

export default CoreTracks
