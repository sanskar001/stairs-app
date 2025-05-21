"use server";

import { signIn } from "@/auth";

export const loginWithGoogle = async () => {
  await signIn("google");
};

export const loginWithGithub = async () => {
  await signIn("github");
};
