import Image from "next/image";
import {Metadata} from "next";
import NavLinks from '@/app/components/nav-bar-schedule';

const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return data.json();
}

export default async function Dashboard() {
    const data = await getData();
    return (
        <>
            <h1>anotações</h1>
            <ul>
                {data.map((todo) =>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}