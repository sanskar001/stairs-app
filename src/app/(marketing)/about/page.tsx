import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 md:pt-10">
      <div className="flex flex-col gap-4 p-4 w-full mx-auto md:max-w-4xl md:flex-row">
        <div className="md:flex-1/3">
          <h1 className="text-2xl font-semibold">
            Empowering Teams to Work Smarter, Not Harder
          </h1>
          <p className="text-slate-600 mt-4">
            At TaskFlow (or your app's name), we believe productivity should be
            simple, intuitive, and collaborative. That’s why we set out to build
            a task management platform that helps individuals and teams stay
            organized, focused, and on track — without the clutter and
            complexity.
          </p>
        </div>
        <div className="relative h-[300px] md:h-auto md:flex-2/3">
          <Image
            fill
            src="/about.svg"
            alt="task app"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
      </div>
      <Button size="lg" asChild className="w-full md:w-xl">
        <Link href="/sign-in">Join us</Link>
      </Button>
    </div>
  );
};

export default AboutPage;
