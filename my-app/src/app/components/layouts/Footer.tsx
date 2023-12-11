import Image from "next/image"
import Logo from "/public/Footer-Logo.png"

const Footer = () => {
    return (
        <footer>
            <div>
                <div className=" bg-blue-950 text-white text-sm text-center py-16">
                    <div className="flex justify-center">
                        <Image src={Logo} alt={"Footer Logo"} width={120} height={120}></Image>
                    </div>
                    <ul className="flex space-x-6 justify-center text-lg mt-10">
                        <li>Home</li>
                        <li>About</li>
                        <li>Documentation</li>
                        <li>Contact</li>
                    </ul>
                    <p className=" mt-6">
                        © Tile Mountain, Inc. All right reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
