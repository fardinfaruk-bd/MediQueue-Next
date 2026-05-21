"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const LoginPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const OnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());


        const { data: res, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,

        })

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Sign up successfully")
            redirect("/")
        }
    }
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        
    };
    

    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center space-y-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome Back</h1>
                <p className="text-[#6c696d]">Resume your Journey with MediQueue</p>
            </div>
            <Card className="border border-gray-100 rounded-none">
                <Form className="flex w-auto sm:w-96 flex-col gap-4 py-5 sm:py-10 px-3" onSubmit={OnSubmit} >

                    <TextField

                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email Address</Label>
                        <Input placeholder="john@example.com" className="rounded-none bg-gray-100" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        className={"relative"}
                        minLength={8}
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" className="rounded-none bg-gray-100" />
                        <span className='absolute right-2 top-9 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        <FieldError />
                    </TextField>
                    <p className="text-blue-500 font-bold mt-1 cursor-pointer">Forget Password?</p>

                    <div className="flex flex-col gap-2">
                        <Button type="submit" className="w-full rounded-none bg-blue-500">
                            
                            Login
                        </Button>

                        <div className="flex justify-center items-center gap-2">
                            <Separator />
                            <p className="text-[#6c696d] text-nowrap">Or continue with</p>
                            <Separator />
                        </div>

                        <Button variant="outline" className="w-full rounded-none mb-2" onClick={handleGoogleLogin}>
                            <FcGoogle />
                            Sign Up with Google
                        </Button>

                        <div className="text-center">
                            <p className="text-[#6c696d]">Do not have an account? <Link href="/register" className="text-blue-500">Register</Link></p>
                        </div>
                    </div>
                </Form>

            </Card>
        </div>
    );
};

export default LoginPage;