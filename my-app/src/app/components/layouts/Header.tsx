import Link from "next/link"
import Logo from "/public/next.svg"
import Image from "next/image"
import Wrapper from "@/app/components/shared/Wrapper"

const Pages: { name: string }[] = [
    {
        name: 'Home'
    },
    {
        name: 'Documentation'
    },
]

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
                    <ul className="space-x-4 hidden sm:flex font-semibold">
                        {
                            Pages.map((items) => {
                                return (
                                    <Link href={"/"}> <li>{items.name}</li> </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </header>
        </Wrapper>
    )
}
