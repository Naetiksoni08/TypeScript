import axios, { AxiosResponse } from "axios";


// Basically, I was getting an error when I was importing xeo's response. The reason was thatExios is basically a functionality, while Exios response is basically a type which is present inside Exios only.So, when I was importing the first code, basically what was happening was that I was getting this error that I can not import a functionality as well as type both at the same time from one statement only. Now, the fix was simple: I went to my typescript, and my strict mode was true, which is verbity module syntax.
//  It was true, and when I false it, then I stopped getting this error.But basically, the simple meaning of this
//  error was that I cannot import a type as well as a functionality that is exios and a type is exiosResponse 
// together, both at the same time. For example, if my verbatim module syntax is true, that means my TypeScript
//  is running in strict mode, so basically I just simply do this: import the functionality of exios and my Type 
// explicitly. I would have mentioned that import Type exiosResponse from exios, so I write separately that,
//  'That's it, verbatimmodulesyntax is true; then this is it.'

// import axios from 'axios';
// import type { AxiosResponse } from "axios";
// when verbitmodulesyntax=true



interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const axiosfetchData = async () => {
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
axiosfetchData();



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