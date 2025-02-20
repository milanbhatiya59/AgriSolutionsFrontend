import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute: React.FC = () => {
    const { isSignedIn, isLoaded } = useUser();

    if (!isLoaded) {
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="text-2xl font-bold">
                    Loading...
                </div>
            </div>
        );
    }

    if (isSignedIn) {
        return (
            <Outlet />
        );
    }

    return (
        <Navigate to="/sign-in" replace />
    );
};

export default ProtectedRoute;
