import Link from "next/link"
import Logo from "/public/next.svg"
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-gray-200 h-16 p-4 sm:flex justify-between">
            {/* LOGO */}
            <div className="flex justify-center items-center">
                <Image src={Logo} alt={"NextJS"} width={120} height={120}></Image>
            </div>
            {/* NAVBAR */}
            <div>
                <ul className="space-x-4 hidden sm:flex font-semibold">
                    <Link href={"/"}> <li>Home</li> </Link>
                    <Link href={"/courses"}><li>Courses</li></Link>
                </ul>
            </div>
        </header>
    )
}
