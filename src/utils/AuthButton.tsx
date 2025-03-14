import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function AuthPage() {
    return (
        <>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}