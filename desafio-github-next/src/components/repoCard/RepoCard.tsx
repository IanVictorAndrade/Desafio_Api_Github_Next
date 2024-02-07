import vector from '@/public/Vector.svg';
import Image from "next/image";

interface RepoCardProps {
    name: string;
    html_url: string;
    description: string;
}
export default function RepoCard(props: RepoCardProps) {
        return (
                <div
                    className={`
                    flex flex-col justify-center items-center gap-[1.25rem] self-stretch
                    text-center bg-[#fff] rounded-[2rem] min-h-8 min-w-8 p-[3rem]
                    xl:min-h-6 xl:min-w-6 xl:p-[2rem] 2xl:min-h-8 2xl:min-w-8 2xl:p-[3rem]
                    `}>
                    <p className="text-2xl text-[#000] text-center break-all font-bold">{props.name}</p>
                    <p className="break-all text-left text-lg text-zinc-800">{props.description}</p>
                    <button
                        className="botao flex gap-2 justify-center items-center w-3/5 text-white tsm:max-w-[12rem] tsm:max-h-[3.5rem] "
                        onClick={() => window.open(props.html_url)}>
                        <Image src={vector} width={20} height={20} alt="icon do botão" />
                        Abrir Repositórios
                    </button>
                </div>
        )
    }