// UserPage.js
import React, { useEffect, useState } from 'react';
import { useUser } from "@/src/contexts/userContext";
import RepoCard from "@/src/components/repoCard/RepoCard";
import { toast } from "react-toastify";

interface Repo {
    name: string;
    html_url: string;
    description: string;
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
                            description: repo.description
                        };
                    });
                    setRepos(reposData);
                }
            })
            .catch((error) => {
                toast.error(`Erro ao pesquisar repositórios: ${error.message}`);
            });
    }, [pesquisarRepos]);

    return (
        <div>
            <div>
                {repos.map((repo) => (
                    <RepoCard key={repo.name}/>
                ))}
            </div>
        </div>
    );
}
