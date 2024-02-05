import { useState } from "react";
import { createContext } from "vm";

interface UserContextProps {
}


const UserContexto = createContext({} as UserContextProps);
export default UserContexto;

export function UserProvider(props: any) {
    const [user, setUser] = useState("");


    return (
        <UserContexto.Provider value={{

        }}>
            {props.children}
        </UserContexto.Provider>
    )
}