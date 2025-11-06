"use client";
import React, { useState } from "react";
import style from "./verifyPasswrodOtp.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { schema } from "@/schema/schemaVerifyPasswrod";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  const handleOtp = async (data: any) => {
    const payload = {
      otp: data.otp.trim(),
      email: data.email.trim(),
    };
    console.log(payload);
    try {
      setLoading(true);
      const response = await axios.post(
        `https://3legent-backend.vercel.app/api/v1/auth/forgot-password/verify-otp`,
        payload
      );
      console.log("response", response.data);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/resetPasswrod");
      }
    } catch (error: any) {
      console.log("error", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
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
          <form onSubmit={handleSubmit(handleOtp)}>
            <h2>Verify OTP</h2>

            <div className={style.inputError}>
              <input
                type="text"
                placeholder="Enter Your Email address"
                {...register("email")}
              />
              {errors?.email?.message && <span>{errors?.email?.message}</span>}
            </div>
            <div className={style.inputError}>
              <input
                type="text"
                placeholder="Enter Your OTP"
                {...register("otp")}
              />
              {errors?.otp?.message && <span>{errors?.otp?.message}</span>}
            </div>

            <button className={style.buttonSignup} type="submit">
              {loading ? "Loading..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
