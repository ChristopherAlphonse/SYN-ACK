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
import { handleFileUpload, useQuizState } from "../utils/useQuizState";

import { useEffect } from "react";
import { RiFolderUploadLine } from "react-icons/ri";
import { toast } from "react-toastify";

const MyQuiz: React.FC = () => {
    const {
        initialQuestions,
        questions,
        currentQuestionIndex,
        selectedOption,
        correctAnswersCount,
        wrongAnswersCount,
        showStats,
        loadedQuestions,
        setLoadedQuestions,
        setQuestions,
        setCurrentQuestionIndex,
        setSelectedOption,
        setCorrectAnswersCount,
        setWrongAnswersCount,
        setShowStats,
    } = useQuizState();

    useEffect(() => {
        localStorage.setItem("quizData", JSON.stringify(initialQuestions));
    }, [initialQuestions]);

    useEffect(() => {
        if (loadedQuestions.length > 0) {
            setQuestions(loadedQuestions);
        }
    }, [loadedQuestions]);

    const handleRestart = () => {
        if (loadedQuestions.length > 0 || !initialQuestions) {
            setQuestions(loadedQuestions);
        }
        setCurrentQuestionIndex(0);
        setSelectedOption("");
        setCorrectAnswersCount(0);
        setWrongAnswersCount(0);
        setShowStats(false);
    };

    const handleAnswerSelection = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            toast.success("Correct answer!");
        } else {
            setWrongAnswersCount((prevCount) => prevCount + 1);
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
            setWrongAnswersCount((prevCount) => prevCount + 1);
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
            setWrongAnswersCount((prevCount) => prevCount + 1);
        }

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setSelectedOption("");
        }
    };

    const handleFileInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            handleFileUpload(
                file,
                setLoadedQuestions,
                setCurrentQuestionIndex,
                setCorrectAnswersCount,
                setSelectedOption,
                setShowStats,
                toast,
            );
        }
    };

    return (
        <div className="px-4">
            <h1 className="text-5xl md:text-9xl capitalize text-gray-600 leading-widest text-center pb-10 md:pb-20 tracking-widest">
                QUIZ
            </h1>
            <div className="pb-3">
                <label
                    htmlFor="uploadFile1"
                    className="flex items-center justify-center text-base outline-none w-max cursor-pointer mx-auto font-[sans-serif] px-4 md:px-9 py-1.5 border border-gray-600 text-white rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out gap-3"
                >
                    JSON {"{ }"}
                    <input
                        type="file"
                        id="uploadFile1"
                        className="hidden"
                        onChange={handleFileInputChange}
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
                                    (option: string) => (
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
                            <div className="desktop-button-container hidden md:flex gap-3">
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
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
                            <div className="mobile-button-container md:hidden">
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
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
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <div className="text-white text-center">
                    <div className="mb-9">
                        <button
                            onClick={handleRestart}
                            className="px-9 py-1.5 border border-gray-600 text-white rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
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

export default MyQuiz;
