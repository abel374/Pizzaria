
import Link from "next/link";

import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/sectionHeader";

export default function Home() {
  return (
    <>
     
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Nossa história'}
          mainHeader={'Sobre nós'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores adipisci suscipit sunt culpa quod laudantium ea esse nam itaque impedit, eos, aperiam totam pariatur quibusdam hic illo alias provident vero?
          </p>
          <p>
            Asperiores adipisci suscipit sunt culpa quod laudantium ea esse nam itaque impedit, eos, aperiam totam pariatur quibusdam hic illo alias provident vero?
          </p>
          <p>
            Dispomos de Diversas soluções que atendem as suas necessidades diarias.
          </p>
        </div>                                                                                                                                                                                                                                            
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Como a Systan pode contribuir para o Crescimento e sucesso da sua Empresa?'}
          mainHeader={'Fale Connosco'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+244947875307">
            +244947875307
          </a>
        </div>
      </section>

    </>
  )
}