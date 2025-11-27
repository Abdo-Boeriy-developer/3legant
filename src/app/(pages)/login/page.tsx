"use client";
import React, { useContext, useState } from "react";
import style from "./login.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { loginType } from "@/Types/loginType";
import { useRouter } from "next/navigation";
import { schemaLogin } from "@/schema/schemaLogin";
import { StoreContext } from "@/Context/ContextProvider";
// import { useRouter } from "next/router";

const page = () => {
  const { setIsLogin } = useContext(StoreContext);
  const [visaplePassword, setVisaplePassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = async (data: loginType) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://3legent-backend.vercel.app/api/v1/auth/login",
        data
      );
      console.log("response", response);

      if (response.data.status === "success") {
        Cookies.set("authorization", response.data.token, { expires: 7 });
        reset();
        toast.success("Signing in successfully! ");
        setIsLogin(true);
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }

    console.log(data);
  };

  return (
    <div className={style.singup}>
      <div className={style.signupContainer}>
        <div className={style.image}>
          <Image src="/signup.png" alt="" width={500} height={10} />
          <h2>3legant</h2>
        </div>
        <div className={style.inputs}>
          <form onSubmit={handleSubmit(submitLogin)}>
            <h2>Sign in</h2>
            <p>
              Don't have an account yet ? <Link href={"/signup"}>Sign Up</Link>
            </p>

            <div className={style.inputError}>
              <input
                type="text"
                placeholder="Email address"
                {...register("email")}
              />
              {errors?.email?.message && <span>{errors?.email?.message}</span>}
            </div>
            <div className={style.passwrod}>
              <div className={style.inputError}>
                <input
                  type={visaplePassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                />
                {errors?.password?.message && (
                  <span>{errors?.password?.message}</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setVisaplePassword(!visaplePassword)}
              >
                {visaplePassword ? <IoEye /> : <IoMdEyeOff />}
              </button>
            </div>
            <div className={style.checkbox}>
              <div>
                <input type="checkbox" id="chack" />
                <label htmlFor="chack">Remember me</label>
              </div>
              <button onClick={() => router.push("/forgotpasswrod")}>
                Forget password ?
              </button>
            </div>
            <button
              className={style.buttonSignup}
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
