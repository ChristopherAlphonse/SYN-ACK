"use client";

import "./audi.css";

import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { PiPause, PiPlay, PiRepeatLight, PiShuffleFill } from "react-icons/pi";

import Amplitude from "amplitudejs";
import { useEffect } from "react";
import { songs } from "../data/songs";

const AudioPlayer = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && typeof Audio !== "undefined") {
            Amplitude.init({
                bindings: {
                    37: "prev",
                    39: "next",
                    32: "play_pause",
                },
                callbacks: {
                    timeupdate: () => {
                        let percentage = Amplitude.getSongPlayedPercentage();
                        if (isNaN(percentage)) {
                            percentage = 0;
                        }
                        const slider = document.getElementById(
                            "song-percentage-played",
                        );
                        if (slider) {
                            slider.style.backgroundSize = percentage + "% 100%";
                        }
                    },
                },
                songs: songs,
            });
            window.onkeydown = (e) => {
                if (e.key === " ") {
                    e.preventDefault();
                }
            };
        }
    }, []);

    return (
        <div className="h-full flex justify-center items-center pb-80">
            <div className="w-screen max-w-9xl">
                <h1 className="text-9xl capitalize text-gray-600 leading-widest  text-center">
                    Music Player
                </h1>
                <div className="relative flex flex-col rounded-xl border border-white shadow-player-dark bg-transparent justify-center mt-9 pt-9">
                    <div className="px-10 pt-10 pb-4 flex items-center z-50">
                        <div className="flex flex-col">
                            <span
                                data-amplitude-song-info="name"
                                className="font-sans text-3xl pb-1 uppercase  font-bold leading-7 text-gray-400"
                            ></span>

                            <span
                                data-amplitude-song-info="artist"
                                className="font-sans text-base font-medium leading-6 text-gray-600"
                            ></span>
                            <span
                                data-amplitude-song-info="album"
                                className="font-sans text-base font-medium leading-6 text-gray-400"
                            ></span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col px-10 pb-6 z-50">
                        <input
                            type="range"
                            id="song-percentage-played"
                            className="amplitude-song-slider mb-3"
                            step=".1"
                        />
                        <div className="flex w-full justify-between">
                            <span className="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-300"></span>
                            <span className="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500"></span>
                        </div>
                    </div>
                    <div className="h-control-panel px-10 rounded-b-xl border-t border-gray-500 flex items-center justify-between z-50 bg-control-panel-dark-background">
                        <div className="cursor-pointer" id="song-saved"></div>
                        <button className="cursor-pointer amplitude-shuffle text-gray-500 hover:text-gray-400">
                            <PiShuffleFill size={45} />
                        </button>
                        <button className="cursor-pointer amplitude-prev text-gray-500 hover:text-gray-400">
                            <BiSkipPrevious size={40} />
                        </button>
                        <div className="cursor-pointer amplitude-play-pause my-3">
                            <PiPause
                                size={50}
                                id="pause-icon"
                                className="text-gray-500 hover:text-gray-400"
                            />
                            <PiPlay
                                size={50}
                                id="play-icon"
                                className="text-gray-500 hover:text-gray-400"
                            />
                        </div>
                        <button className="cursor-pointer amplitude-next text-gray-500 hover:text-gray-400">
                            <BiSkipNext size={40} />
                        </button>
                        <button className="cursor-pointer amplitude-repeat-song text-gray-500 hover:text-gray-400">
                            <PiRepeatLight size={45} />
                        </button>
                        <div>
                            <div id="volume-container">
                                <input
                                    type="range"
                                    className="amplitude-volume-slider"
                                    id="volume-slider"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
