import Image from "next/image";
import github from "@/public/github.svg";
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "@/src/contexts/userContext";


export default function Principal() {
     const { setUsername ,pesquisarRepos } = useUser()



    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 justify-center items-center">
                <Image src={github} width={118} height={32} alt="adsad" />
                <p className="text-black font-black text-xl">Visualizador de repositórios</p>
            </div>
            <div className="flex flex-col gap-4">
                <input 
                    className="bg-white w-[20.5rem] h-[3.5rem] rounded-[1rem] text-black p-5 placeholder:text-[#7C7C7C]" 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuário"
                />
                <button 
                    className="botao" onClick={pesquisarRepos}>
                    Pesquisar Repositórios
                </button>
            </div>
        </div>
        
    )
}
