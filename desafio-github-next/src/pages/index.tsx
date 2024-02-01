    import Image from "next/image";
    import github from "@/public/github.svg";
    export default function Home() {
        return (
            <main className="flex bg-[#F1F1F6] items-center justify-center h-screen">
                <div>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <Image src={github} width={118} height={32} alt="adsad" />
                    <p className="text-black font-black text-xl">Visualizador de repositórios</p>
                </div>
                <div className="flex flex-col gap-4">
                    <input className="bg-white" type="search"/>
                    <button className="bg-[#416BAB] w-[330px]">Pesquisar Repositórios</button>
                </div>
                </div>
            </main>
        )
    }