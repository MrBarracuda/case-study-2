import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export function Navbar() {
  return (
      <header className="h-16 drop-shadow-sm bg-gray-200">
        <div className="max-w-screen-xl flex items-center justify-end h-full">
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </header>
  );
}

