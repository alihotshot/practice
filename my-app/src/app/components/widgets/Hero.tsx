import Button from "@/app/components/shared/Button"
import Image from "next/image"
import HeroPoster from "/public/hero-poster.webp"
import Wrapper from "@/app/components/shared/Wrapper"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex mt-10">
                    {/* Left side */}
                    <div className="flex-1 mt-16">
                        <h4 className=" text-xl font-semibold text-teal-900">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl my-4 font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="text-lg my-6 text-slate-500">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
                            <br /><br />
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies.</p>
                        <div>
                            <Button text={"Learn More"} />
                        </div>
                    </div>
                    <div className="flex-1">

                        {/* Right side */}
                        <Image src={HeroPoster} alt="Hero Image"></Image>
                    </div>
                </div>
                
            </Wrapper>
        </section>
    )
}

export default Hero
