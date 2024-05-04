"use client";

import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import dynamic from "next/dynamic";
import Loader from "../components/loaderUI/Loader";
import MyNavbar from "../components/MyNavbar";
import MyQuiz from "../components/MyQuiz";

const DynamicAudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
    ssr: false,
});

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            <MyNavbar />
            {isLoading ? (
                <div className="flex min-h-screen items-center justify-center p-4 md:p-24">
                    <Loader />
                </div>
            ) : (
                <main className="min-h-screen">
                    <div className="container mx-auto px-4">
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
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <MyQuiz />
                            <DynamicAudioPlayer />
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
