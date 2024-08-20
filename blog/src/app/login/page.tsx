"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const login =()=>{
    const router = useRouter();
    useEffect(() => {
        if (!router) {
            console.error("NextRouter is not mounted.");
        }
    }, [router]);
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <Link href="/">Go To Home Page</Link>
            <br />
            <br />
            <button onClick={()=>router.push("/login/loginstudent")}>Go To Student Login Page</button>
            <br />
            <br />
            <button>Go To Teacher Login Page</button>
           
        </div>
    )
}

export default login;