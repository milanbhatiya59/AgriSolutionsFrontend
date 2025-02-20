import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="mt-12 flex items-center justify-center">
                <p className="text-4xl font-bold">
                    Home
                </p>
            </div>
        </div>
    );
}
