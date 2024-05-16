/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Image from "next/image";
import {Metadata} from "next";
import NavLinks from '@/app/components/nav-bar-schedule';
import React, { useState } from "react";

const handleChange = (e) => {
    e.target.value;

}

const handleSubmit = (e) => e.preventDefault();



export default function shedule() {

    return(
        
        <div className="main-container relative flex bg-[url('/images/background-image-2.jpg')]">
            <div className="h-full border-solid border-black shadow-md">
                <NavLinks/>

            </div>

            <div className="notes flex flex-col h-4/5 w-1/2 bg-white shadow-lg shadow-black/50">
                <h1 className="flex text-h1 justify-center">Faça sua anotação aqui</h1>
                <hr className="mb-10"></hr>
                <form onSubmit={handleSubmit} action="">
                    <label className="ml-5 text-link" >Assunto da anotação</label>
                    <input className="border-2 border-black" type="text" name="assunto" id="assunto" onChange={handleChange}></input>

                    <label className="ml-5 text-link" onChange={handleChange}>Data para entrega</label>
                    <input className="border-2 border-black" type="date" name="data" id="data"></input>

                    <div className="flex justify-center">
                        <button className="border-2 w-1/2 h-10 border-violet-700 bg-violet-700 rounded-2xl text-white" type="submit">Enviar anotação</button>
                    </div>
                </form>

            </div>
            

        </div>
    );
}