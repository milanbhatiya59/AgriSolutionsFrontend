import { useClerk } from '@clerk/clerk-react';

export default function SignIn() {
    const { openSignUp } = useClerk();

    const onClick = () => {
        openSignUp();
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <div>
                    <p className='font-bold'>
                        You are not signed up. Please sign up to access all features!
                    </p>
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <button
                        className='bg-black text-white py-3 px-6 rounded-2xl font-bold cursor-pointer'
                        onClick={onClick}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
