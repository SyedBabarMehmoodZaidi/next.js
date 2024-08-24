'use client'
import Link from "next/link";
import {useRouter} from "next/navigation"
const about =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>ABOUT PAGE</h1>
            <Link href="/" className="btncolor">Go To Home Page</Link><br></br>
            <br></br>
            <button onClick={()=>router.push("/")}>Go To Home Page</button>
            <br />
            <br />
            <Link href="/about/aboutcollege">Go To About College Page</Link>
            <br />
            <br />
            <Link href="/about/aboutstudent">Go To About Student Page</Link>
        </div>
    )
}

export default about;