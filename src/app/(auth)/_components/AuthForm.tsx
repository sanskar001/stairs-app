"use client";

import React, { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  authType: "signIn" | "signUp";
}

const AuthForm: FC<AuthFormProps> = ({ authType }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const signinHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const signupHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={authType === "signIn" ? signinHandle : signupHandle}
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
      {authType === "signUp" && (
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
      )}
      <Button type="submit" size="lg" className="w-full cursor-pointer">
        Continue
      </Button>
    </form>
  );
};

export default AuthForm;
