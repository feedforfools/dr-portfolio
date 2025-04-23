import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-4xl items-center px-6">
        {" "}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">DR</span>
          </Link>
          {/* Potential future nav links could go here */}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Optional: Social links could go here */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
