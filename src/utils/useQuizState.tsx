import { useEffect, useState } from "react";

import { getMockQuizData } from "../components/getMockQuizData";

export const useQuizState = () => {
    const [initialQuestions, setInitialQuestions] = useState(
        JSON.parse(localStorage.getItem("quizData") ?? "null") ||
            getMockQuizData(),
    );
    const [questions, setQuestions] = useState(initialQuestions || []);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [showStats, setShowStats] = useState(false);
    const [loadedQuestions, setLoadedQuestions] = useState([]);

    useEffect(() => {
        localStorage.setItem("quizData", JSON.stringify(initialQuestions));
    }, [initialQuestions]);

    useEffect(() => {
        if (loadedQuestions.length > 0) {
            setQuestions(loadedQuestions);
        }
    }, [loadedQuestions]);

    return {
        initialQuestions,
        questions,
        currentQuestionIndex,
        selectedOption,
        correctAnswersCount,
        wrongAnswersCount,
        showStats,
        loadedQuestions,
        setInitialQuestions,
        setQuestions,
        setCurrentQuestionIndex,
        setSelectedOption,
        setCorrectAnswersCount,
        setWrongAnswersCount,
        setShowStats,
        setLoadedQuestions,
    };
};

export const handleFileUpload = (
    file: File,
    setLoadedQuestions: (data: any[]) => void,
    setCurrentQuestionIndex: (index: number) => void,
    setCorrectAnswersCount: (count: number) => void,
    setSelectedOption: (option: string) => void,
    setShowStats: (show: boolean) => void,
    toast: any,
) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const jsonData = JSON.parse(event.target?.result as string);
            setLoadedQuestions(jsonData);
            setCurrentQuestionIndex(0);
            setCorrectAnswersCount(0);
            setSelectedOption("");
            setShowStats(false);
        } catch (error) {
            console.error("Error parsing JSON file:", error);
            toast.error(
                "Error parsing JSON file. Please upload a valid JSON file.",
            );
        }
    };
    reader.readAsText(file);
};
