"use client";
import Image from "next/image";
import {Metadata} from "next";
import NavLinks from '@/app/components/nav-bar-schedule';

export default function shedule() {
    return(
        <div className="main-container relative flex bg-[url('/images/background-image-2.jpg')]">
            <div className="h-full border-solid border-black shadow-md">
                <NavLinks/>

            </div>

            <div className="notes flex flex-col h-4/5 w-1/2 bg-white shadow-lg shadow-black/50">
                <h1 className="flex text-h1 justify-center">Faça sua anotação aqui</h1>
                <hr className="mb-10"></hr>
                <form>
                    <label className="ml-5 text-link">Assunto da anotação</label>
                    <input className="border-2 border-black" type="text"></input>

                    <label className="ml-5 text-link">Data para entrega</label>
                    <input className="border-2 border-black" type="date"></input>

                    <label className="ml-5 text-link">Registre aqui sua anotação</label>
                    <textarea className="h-60 border-2 border-black" type="textarea"></textarea>

                    <div className="flex justify-center">
                        <button className="border-2 w-1/2 h-10 border-violet-700 bg-violet-700 rounded-2xl text-white">Enviar anotação</button>
                    </div>


                </form>

            </div>
            

        </div>
    );
}