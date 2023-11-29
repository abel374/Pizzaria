import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./sectionHeader";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full">
                <div className=" absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
                </div>
                <div className="absolute -tpo-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
                </div>
            </div>
            <div className="text-center mb-4">
              <SectionHeaders
              subHeader={'sair'}
              mainHeader={'Menu'}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8s gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            </div>
        </section>
    );
}