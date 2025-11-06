"use client";
import Image from "next/image";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import style from "./forget.module.css";
import { useState } from "react";
import { schema } from "@/schema/schemaForgot";

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
    },
  });

  const handleForgot = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `https://3legent-backend.vercel.app/api/v1/auth/forgot-password`,
        { email: data.email }
      );
      console.log("response.data", response.data.status);

      if (response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/verifyPasswrodOtp");
      }
    } catch (error: any) {
      toast.error(error.data.message);
      console.log("Error", error.data.response.message);
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
          <form onSubmit={handleSubmit(handleForgot)}>
            <h2>Forgot Passwrod</h2>

            <div className={style.inputError}>
              <input
                type="text"
                placeholder="Email address"
                {...register("email")}
              />
              {errors?.email?.message && <span>{errors?.email?.message}</span>}
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
