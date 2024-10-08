"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login/" + page);
  };

  return (
    <div>
      <h1 className="heading" >LOGIN PAGE</h1>
      <Link href="/">Go To Home Page</Link>
      <br />
      <br />
      <button className="btncolor" onClick={() => navigate("loginstudent")}>
        Go To Student Login Page
      </button>
      <br />
      <br />
      <button className="btncolor" onClick={() => navigate("loginteacher")}>
        Go To Teacher Login Page
      </button>
    </div>
  );
};

export default Login;
