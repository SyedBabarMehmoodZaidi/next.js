'use client'
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <main>
      <h1>PAK ANGRO TRADERS | BABAR BAMSI </h1>
      <Link href="/login">Go To Login Page</Link>
      <br></br>
      <br></br>
      <Link href="/about">Go To About Page</Link>
      <br></br>
      <br></br>
      <button onClick={()=>navigate("/login")}>Go To Login Page</button>
      <br></br>
      <br></br>
      <button onClick={()=>navigate("/about")}>Go To About Page</button>
      </main> 

  )
}
