import AuthPage from "../../../utils/AuthButton";

export default function Navbar(){
    return (
        <div className="w-full h-18 bg-stone-600">
            <div className="flex items-center justify-end px-5 py-5 top-0 gap-x-2">
                <AuthPage />
            </div>
        </div>
    );
}