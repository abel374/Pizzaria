"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  function handleFormSubmit(ev){
    ev.preventDefault();
    fetch('/api/register',{
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers:{'Content-Type': 'application/json'},
    });
  }

    return <section className="mt-8">
         <h1 className="text-center text-primary text-4xl mb-4">
        Registrar
      </h1>
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button type="submit">Registra-se</button>
            <div className="my-4 text-center text-gray-500">
         Ou faça Logim com Provedor
        </div>
        <button
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Logim com Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Já tens uma Conta?{' '}
          <Link className="underline" href={'/login'}>Faça Logim aqui &raquo;</Link>
        </div>
        </form>
    </section>
}