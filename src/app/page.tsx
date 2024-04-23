import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, Zoom } from "react-toastify";

import Navbar from "../components/nav";
import Quiz from "../components/Quiz";

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
                </div>
            </main>
        </>
    );
}
