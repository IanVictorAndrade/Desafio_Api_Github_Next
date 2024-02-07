import {useState, createContext, useContext, SetStateAction, Dispatch, useCallback} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface UserContextProps {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>
    pesquisarRepos: () => Promise<void>;
}


const UserContexto = createContext<UserContextProps>({} as any);
export default UserContexto;

export function UserProvider(props: any) {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const pesquisarRepos = useCallback(async () => {
        const resp = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await resp.json();
        if (username) {
            if (resp.ok) {
                await router.push("/userRepos");
                return data;
            } else {
                toast.error("Usuário não encontrado");
            }
        }

    }, [username, router]);


    return (
        <UserContexto.Provider value={{
            username,
            pesquisarRepos,
            setUsername
        }}>
            {props.children}
        </UserContexto.Provider>
    )
}

export const useUser = () => useContext(UserContexto);