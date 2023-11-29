import Image from "next/image";
import Link from "next/link";

export default function RegisterPage(){
    return <section className="mt-8">
         <h1 className="text-center text-primary text-4xl mb-4">
        Registrar
      </h1>
        <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Senha"/>
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