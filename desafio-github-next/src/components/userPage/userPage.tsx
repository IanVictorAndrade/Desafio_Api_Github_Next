import { useUser } from "@/src/contexts/userContext";
import {useEffect} from "react";


export default function UserPage() {
    const { pesquisarRepos } = useUser()

    useEffect(() => {
        pesquisarRepos().then((data) => console.log(data))
    }, [])

    return (
        <div>
            <h1 className="font-black text-6xl">ALOOOOOOOOO</h1>
        </div>
    )
}