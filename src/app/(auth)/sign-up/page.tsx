"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Link from "next/link";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const loginWithGoogle = async () => {};

  const loginWithGithub = async () => {};

  return (
    <Card className="border-0 outline-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Create Your Account
        </CardTitle>
        <CardDescription className="text-center">
          Join Stairs and start organizing your work in minutes.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <form
          onSubmit={loginHandle}
          className="w-full flex flex-col items-center space-y-4"
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button type="submit" size="lg" className="w-full">
            Continue
          </Button>
        </form>
        <Separator />
        <Button
          size="lg"
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={loginWithGoogle}
        >
          <Image
            src="/google-icon.svg"
            alt="google icon"
            width={16}
            height={16}
          />
          Continue with Google
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={loginWithGithub}
        >
          <Image
            src="/github-icon.svg"
            alt="github icon"
            width={16}
            height={16}
          />
          Continue with Github
        </Button>
      </CardContent>
      <CardFooter>
        <div className="w-full text-xs text-center">
          Already have accoount?{" "}
          <Link href="/sign-in" className="text-red-600">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpPage;
