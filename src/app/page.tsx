import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, Zoom } from "react-toastify";

import Navbar from "@/components/Nav";
import Quiz from "@/components/Quiz";
import dynamic from "next/dynamic";

const DynamicAudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
    ssr: false,
});
export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen items-center justify-center p-24">
                <div className="z-10 w-full max-w-5xl">
                    <ToastContainer
                        position="top-right"
                        autoClose={1100}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="dark"
                        transition={Zoom}
                    />

                    <Quiz />
                    <DynamicAudioPlayer />
                </div>
            </main>
        </>
    );
}
