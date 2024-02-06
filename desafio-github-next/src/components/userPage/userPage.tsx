import React, { useEffect, useState } from 'react';
import { useUser } from "@/src/contexts/userContext";
import RepoCard from "@/src/components/repoCard/RepoCard";
import { toast } from "react-toastify";
import github from "@/public/github.svg";
import Image from "next/image";


interface Repo {
    name: string;
    html_url: string;
    description: string;
    user_name: string;
    avatar: string;
}

export default function UserPage() {
    const { pesquisarRepos } = useUser();
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        pesquisarRepos()
            .then((data) => {
                if (Array.isArray(data)) {
                    const reposData: Repo[] = data.map((repo) => {
                        return {
                            name: repo.name,
                            html_url: repo.html_url,
                            description: repo.description,
                            user_name: repo.owner.login,
                            avatar: repo.owner.avatar_url
                        };
                    });
                    setRepos(reposData);
                }
            })
            .catch((error) => {
                toast.error(`Erro ao pesquisar repositórios: ${error.message}`);
            });
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4">
                <Image src={github} width={118} height={32} className="mt-16" alt="" />
                    <div className="flex justify-center items-center gap-3">
                        <img src={repos[0].avatar} className="w-[3.75rem] h-[3.75rem] rounded-3xl" alt="foto do usuário" />
                        <p className="text-2xl font-bold">{repos[0].user_name}</p>
                    </div>
            </div>
            <section className="grid grid-cols-3 gap-[2rem] justify-center items-center w-[75%] m-auto mb-[30%]">
                {repos.map((repo) => (
                    <RepoCard key={repo.name} name={repo.name} description={repo.description} html_url={repo.html_url}/>
                ))}
            </section>
        </>
    );
}
