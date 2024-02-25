import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
    return(
        <>
        <Image src='/uber-banner.jpg' width={900} height={1000} className="object-contain h-full w-full"/>
        <div className="absolute top-20 left-28"> <SignIn/>
        </div>
         </>
    )
}