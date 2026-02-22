import axios, { AxiosResponse } from "axios";


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> =
            await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Todo", response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);

            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
fetchData();



interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData1 = async (): Promise<void> => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // check if request failed
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: Todo = await response.json();

        console.log("Todo:", data);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
};

fetchData1();