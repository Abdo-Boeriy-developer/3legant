"use client";
import React, { useState } from "react";
import style from "./signup.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signupType } from "@/Types/signupType";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { schema } from "@/schema/schemaSignIn";

const page = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [visaplePassword, setVisaplePassword] = useState(false);
  const [visapleConfirmPassword, setVisapleConfirmPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const submitSignup = async (data: signupType) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://3legent-backend.vercel.app/api/v1/auth/register",
        data
      );
      // console.log(response.data);
      if (response.data.message === "user registered successfully") {
        reset();
        toast.success("Account created successfully!");
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Error", error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={style.singup}>
      <div className={style.signupContainer}>
        <div className={style.image}>
          <Image src="/signup.png" alt="" width={500} height={10} />
          <h2>3legant</h2>
        </div>
        <div className={style.inputs}>
          <form onSubmit={handleSubmit(submitSignup)}>
            <h2>Sign up</h2>
            <p>
              Alerady have an account ? <Link href={"/login"}>Sign in</Link>
            </p>
            <div className={style.inputError}>
              <input
                type="text"
                placeholder="Your name"
                {...register("fullName")}
              />
              {errors?.fullName?.message && (
                <span>{errors?.fullName?.message}</span>
              )}
            </div>
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
            <div className={style.passwrod}>
              <div className={style.inputError}>
                <input
                  type={visapleConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Passwrod"
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword?.message && (
                  <span>{errors?.confirmPassword?.message}</span>
                )}
              </div>
              <button
                type="button"
                onClick={() =>
                  setVisapleConfirmPassword(!visapleConfirmPassword)
                }
              >
                {visapleConfirmPassword ? <IoEye /> : <IoMdEyeOff />}
              </button>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" id="chack" />
              <label htmlFor="chack">
                i agree with <Link href="">Privacy</Link>
                <span>and Terms of Use</span>
              </label>
            </div>
            <button
              className={style.buttonSignup}
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
