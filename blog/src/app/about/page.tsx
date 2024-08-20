'use client'
import Link from "next/link";
import {useRouter} from "next/navigation"
const about =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>ABOUT PAGE</h1>
            <Link href="/">Go To Home Page</Link><br></br>
            <br></br>
            <button onClick={()=>router.push("/")}>Go To Home Page</button>
        </div>
    )
}

export default about;