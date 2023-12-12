import Link from "next/link"
import Logo from "/public/next.svg"
import Image from "next/image"
import Wrapper from "@/app/components/shared/Wrapper"

export default function Header() {
    return (
        <Wrapper>
            <header className="bg-gray-200 h-16 p-4 sm:flex justify-between items-center">
                {/* LOGO */}
                <div className="flex justify-center items-center">
                    <Image src={Logo} alt={"NextJS"} width={120} height={120}></Image>
                </div>
                {/* NAVBAR */}
                <div>
                    <ul className="space-x-4 hidden sm:flex font-medium">
                        <Link href={"/"}> <li>Home</li> </Link>
                        <Link href={"/"}> <li>Documentation</li> </Link>
                        <Link href={"/"}> <li>About</li> </Link>
                        <Link href={"/"}> <li>Contact</li> </Link>
                    </ul>
                </div>
            </header>
        </Wrapper>
    )
}
