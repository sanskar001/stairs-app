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

const SignUpPage = () => {
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
        <AuthForm authType="signUp" />
        <Separator />
        <OAuthProviders />
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
