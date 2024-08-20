"use client";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login/" + page);
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <Link href="/">Go To Home Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("loginstudent")}>
        Go To Student Login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginteacher")}>
        Go To Teacher Login Page
      </button>
    </div>
  );
};

export default Login;
