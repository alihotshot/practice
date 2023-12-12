import Image from "next/image"
import Logo from "/public/Footer-Logo.png"

const Footer = () => {
    return (
        <footer>
            <div>
                <div className=" bg-blue-950 text-sm text-center py-16">

                    {/* Footer Logo */}
                    <div className="flex justify-center">
                        <Image src={Logo} alt={"Footer Logo"} width={120} height={120}></Image>
                    </div>

                    {/* Footer Pages */}
                    <ul className="flex space-x-6 justify-center text-lg mt-10 text-white">
                        <li>Home</li>
                        <li>About</li>
                        <li>Documentation</li>
                        <li>Contact</li>
                    </ul>

                    {/* Copyright Content */}
                    <p className=" mt-6 text-slate-300">
                        © Tile Mountain 2023, Inc. All right reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
