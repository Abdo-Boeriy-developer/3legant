"use client";
import React, { useEffect, useState } from "react";
import style from "./resetPasswrod.module.css";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/schema/schemaResetPasswrod";
import axios from "axios";
import toast from "react-hot-toast";

const page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const [visaplePassword, setVisaplePassword] = useState(false);
  const [visapleConfirmPassword, setVisapleConfirmPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);
  const handleResetPasswrod = async (data: any) => {
    console.log("data", data);
    const payload = {
      email: email?.trim(),
      newPassword: data.newPassword.trim(),
      confirmNewPassword: data.confirmNewPassword.trim(),
    };
    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://3legent-backend.vercel.app/api/v1/auth/reset-password`,
        payload
      );
      // console.log("response", response.data);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/login");
      }
    } catch (error: any) {
      // console.log("error", error);
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
          <form onSubmit={handleSubmit(handleResetPasswrod)}>
            <h2>Reset Passwrod</h2>

            <div className={style.passwrod}>
              <div className={style.inputError}>
                <input
                  type={visaplePassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("newPassword")}
                />
                {errors?.newPassword?.message && (
                  <span>{errors?.newPassword?.message}</span>
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
                  {...register("confirmNewPassword")}
                />
                {errors?.confirmNewPassword?.message && (
                  <span>{errors?.confirmNewPassword?.message}</span>
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

            <button
              className={style.buttonSignup}
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
