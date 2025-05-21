import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import AuthForm from "../_components/AuthForm";
import OAuthProviders from "../_components/OAuthProviders";

const SignInPage = () => {
  return (
    <Card className="border-0 outline-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">
          Log in to manage your projects, track tasks, and stay productive.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <AuthForm authType="signIn" />
        <Separator />
        <OAuthProviders />
      </CardContent>
      <CardFooter>
        <div className="w-full text-xs text-center">
          Don't have account?{" "}
          <Link href="/sign-up" className="text-red-600">
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignInPage;
