import vector from '@/public/Vector.svg';
import Image from "next/image";

interface RepoCardProps {
    name: string;
    html_url: string;
    description: string;
}
export default function RepoCard(props: RepoCardProps) {
        return (
                <div className="flex flex-col justify-center items-center gap-[1.25rem] text-center bg-[#fff] rounded-[3rem] p-[2rem] w-[22rem] h-[13rem]">
                    <p className="text-4xl text-[#000] text-center break-words font-bold">{props.name}</p>
                    <p className="break-words text-zinc-800">{props.description}</p>
                    <button
                        className="botao flex gap-2 items-center justify-center text-white"
                        onClick={() => window.open(props.html_url)}>
                        <Image src={vector} width={20} height={20} alt="icon do botão" />
                        Abrir Repositórios
                    </button>
                </div>
        )
    }