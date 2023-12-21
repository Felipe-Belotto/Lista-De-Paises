'use client' // Para renderizar erros precisa indicar que é do lado do cliente

import Image from "next/image";
import Link from "next/link";

export default function Error(){
  return(
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my -16 "> Ops, ocorreu um erro ao exibir esse país!</h1>
      <Link className="flex items-center py-2 gap-1 cursor-pointer" href="/">
      <Image src="/arrow-back.svg" alt="icone de voltar" width={15} height={15} />Voltar </Link>
    </section>
  )
}