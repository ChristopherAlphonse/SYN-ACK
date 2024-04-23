"use client";
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RiFolderUploadLine } from "react-icons/ri";

import { toast } from "react-toastify";
import { getMockQuizData } from "./quizData";

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>(
        getMockQuizData(),
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [showStats, setShowStats] = useState(false);
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const jsonData = JSON.parse(event.target?.result as string);
                    setQuestions(jsonData);
                    setCurrentQuestionIndex(0);
                    setCorrectAnswersCount(0);
                    setSelectedOption("");
                } catch (error) {
                    console.error("Error parsing JSON file:", error);
                    toast.error(
                        "Error parsing JSON file. Please upload a valid JSON file.",
                    );
                }
            };
            reader.readAsText(file);
        }
    };

    const handleRestart = () => {
        setQuestions(getMockQuizData());
        setCurrentQuestionIndex(0);
        setSelectedOption("");
        setCorrectAnswersCount(0);
        setWrongAnswersCount(0); // Reset wrong answers count
        setShowStats(false);
    };

    const handleAnswerSelection = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            toast.success("Correct answer!");
        } else {
            setWrongAnswersCount((prevCount) => prevCount + 1); // Increment wrong answers count
            toast.error("Wrong answer. Try again!");
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption("");
        } else {
            setShowStats(true);
        }
    };

    const handleNextQuestion = () => {
        if (selectedOption !== questions[currentQuestionIndex].correctAnswer) {
            setWrongAnswersCount((prevCount) => prevCount + 1); // Increment wrong answers count
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption("");
        } else {
            setShowStats(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (selectedOption !== questions[currentQuestionIndex].correctAnswer) {
            setWrongAnswersCount((prevCount) => prevCount + 1); // Increment wrong answers count
        }

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setSelectedOption("");
        }
    };

    return (
        <div className="">
            <div className="pb-3">
                <label
                    htmlFor="uploadFile1"
                    className="flex   text-base outline-none  w-max cursor-pointer mx-auto font-[sans-serif]   px-9 py-1.5 border border-gay-600 text-white rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out gap-3"
                >
                    JSON {"{ }"}
                    <input
                        type="file"
                        id="uploadFile1"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                    <RiFolderUploadLine size={20} />
                </label>
            </div>
            {!showStats ? (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {questions[currentQuestionIndex].question}
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="quiz-options"
                                name="quiz-options"
                                value={selectedOption}
                                onChange={handleAnswerSelection}
                            >
                                {questions[currentQuestionIndex].options.map(
                                    (option, optionIndex) => (
                                        <FormControlLabel
                                            key={crypto.randomUUID()}
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ),
                                )}
                            </RadioGroup>
                        </FormControl>
                        <Box mt={2} gap={3}>
                            <div className="flex gap-3">
                                <div>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handlePreviousQuestion}
                                        disabled={
                                            !selectedOption ||
                                            currentQuestionIndex === 0
                                        }
                                    >
                                        Prev
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNextQuestion}
                                        disabled={!selectedOption}
                                    >
                                        {currentQuestionIndex ===
                                        questions.length - 1
                                            ? "Show Stats"
                                            : "Next"}
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <div className="text-white text-center">
                    <div className="mb-9">
                        <button
                            onClick={handleRestart}
                            className="px-9 py-1.5 border border-gay-600 text-white rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
                        >
                            Restart
                        </button>
                    </div>
                    <h2 className="text-9xl font-bold">End of Quiz</h2>

                    <div className="font-md pt-3 text-xl">
                        <p>Total Questions: {questions.length}</p>
                        <p>
                            Correct Answers:{" "}
                            <span className="text-green-600">
                                {correctAnswersCount}
                            </span>{" "}
                            <span className="text-gray-900">{"|"} </span>
                        </p>
                        <p>
                            Wrong Answer:{" "}
                            <span className="text-red-600">
                                {wrongAnswersCount}
                            </span>{" "}
                            <span className="text-gray-900">{"|"} </span>
                        </p>
                    </div>
                </div>
            )}

            {!showStats && (
                <div className="flex-end justify-end flex gap-3">
                    <p>
                        Wrong Answer:{" "}
                        <span className="text-red-600">
                            {wrongAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <p>
                        Correct Answers:{" "}
                        <span className="text-green-600">
                            {correctAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <p>
                        Total Questions:{" "}
                        <span className="text-slate-200">
                            {questions.length}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
