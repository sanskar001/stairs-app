"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { loginWithGithub, loginWithGoogle } from "../_actions";

const OAuthProviders = () => {
  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="w-full flex items-center justify-center cursor-pointer"
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
        className="w-full flex items-center justify-center cursor-pointer"
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
    </>
  );
};

export default OAuthProviders;
