"use client";

import "react-toastify/dist/ReactToastify.css";

import { Suspense, useEffect, useState } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import Loader from "../components/loaderUI/Loader";
import MyNavbar from "../components/MyNavbar";
import Quiz from "../components/MyQuiz";
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";

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
                <div className="flex min-h-screen items-center justify-center p-24">
                    <Loader />
                </div>
            ) : (
                <main
                    className={`flex min-h-screen items-center justify-center p-24 `}
                >
                    <div className="z-10 w-full max-w-5xl">
                        <ToastContainer
                            position="bottom-right"
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
                        <Suspense fallback={<Skeleton />}>
                            <DynamicAudioPlayer />
                            <Quiz />
                        </Suspense>
                    </div>
                </main>
            )}
        </>
    );
}
