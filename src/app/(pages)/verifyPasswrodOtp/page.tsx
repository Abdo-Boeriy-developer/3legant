"use client";
import React, { useEffect, useState } from "react";
import style from "./verifyPasswrodOtp.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { schema } from "@/schema/schemaVerifyPasswrod";
import OTPInput from "react-otp-input";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const { handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    setValue("otp", otp);
  }, [otp, setValue]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  const handleOtp = async (data: any) => {
    const payload = {
      email: email,
      otp: data?.otp,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `https://3legent-backend.vercel.app/api/v1/auth/forgot-password/verify-otp`,
        payload
      );
      // console.log("response", response.data);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/resetPasswrod");
      }
    } catch (error: any) {
      // console.log("error", error);
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

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span></span>}
              renderInput={(props) => (
                <div className={style.otp}>
                  <input {...props} />
                </div>
              )}
            />

            <button className={style.buttonSignup} type="submit">
              {loading ? "Loading..." : " Verify"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
