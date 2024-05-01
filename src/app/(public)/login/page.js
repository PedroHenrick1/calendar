"use client";
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";
import NavLinks from '@/app/components/nav-bar';


export default function Login() {
  return (
    <div className="main-container flex items-center">
      <NavLinks/>
      <div className="login shadow-lg shadow-black/50">
        <h1 className="text-h1 mb-12">Login</h1>
        <form>
            <div className="flex flex-col w-96">
              <label className="ml-5 text-link text-white">Usuário</label>
              <input type="text" placeholder="Seu usuário" className="placeholder:italic"></input>

              <label className="ml-5 text-link text-white">Senha</label>
              <input type="password" placeholder="Sua senha" className="placeholder:italic"></input>
              <div className="flex justify-center">
            </div>

            <div className="flex justify-center ">
              <button type="submit" className="m-5 w-1/3 h-12 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-2xl ease-in duration-300 shadow-lg shadow-violet-600/50 text-white">Enviar</button>
            </div>

            </div>
            <Link className="flex justify-center hover:text-white ease-in duration-300 underline decoration-solid" href="/cadastrar">Não tem conta? Clique aqui para se cadastrar</Link>
        </form>
      </div>
    </div>
  );
}
