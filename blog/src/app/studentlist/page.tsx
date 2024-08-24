import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List </h1>
            <ul>
                <li>
                    <Link href="/studentlist/babar">Babar</Link>
                </li>
                <li>
                <Link href="/studentlist/hassam">Hassam</Link>
                </li>
                <li>
                <Link href="/studentlist/ali">Ali</Link>
                </li>
                <li>
                    <Link href="/studentlist/arsalan">Arsalan</Link>
                </li>
                <li>
                    <Link href="/studentlist/sualeh">Sualeh</Link>
                </li>
                <li>
                <Link href="/studentlist/anas">Anas</Link>
                </li>
            
            </ul>
        </div>
    )
}