"use client";
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";
import NavLinks from '@/app/components/nav-bar';


export default function Home() {
  return (
    <div className="main-container">
      
      <div className="login">
        <h1 className="text-h1">Login</h1>
        <form>
            <div className="flex flex-col w-96">
              <label className="ml-5 text-link">Usuario</label>
              <input type="text" placeholder="Seu nome" className="placeholder:italic"></input>

              <label className="ml-5 text-link">Senha</label>
              <input type="password" placeholder="Sua senha" className="placeholder:italic"></input>
              <div className="flex justify-center">
            </div>

            <div className="flex justify-center ">
              <button type="submit" className="m-5 w-1/3 h-12 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-2xl ">Enviar</button>
            </div>

            </div>
            <Link className=" mr-10" href="/cadastrar">Clique aqui para se cadastrar</Link>
        </form>
      </div>
    </div>
  );
}

