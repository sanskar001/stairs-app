import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-30 px-4 flex flex-col items-center justify-center space-y-3 text-center">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl w-full sm:max-w-3xl">
        Power Your Projects with Smart{" "}
        <span className="text-red-500">Task</span> Management
      </h1>
      <p className="text-slate-700">
        Plan, assign, and track every task in one place — built for teams who
        get things done.
      </p>
      <div className="mt-2 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full sm:w-auto"
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
        <Button className="w-full sm:w-auto" asChild size="lg">
          <Link href="/sign-in">Playground</Link>
        </Button>
      </div>
    </div>
  );
}
