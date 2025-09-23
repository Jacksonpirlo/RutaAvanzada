import { User } from "@/dto/users";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { HandleNotification } from "@/helpers/utils";

export const UseLogin = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const URL_API = 'http://localhost:3000';

    async function API(url: string = 'http://localhost:3000') {
        localStorage.setItem('isAuth', 'false');
        const res = await axios.get(`${url}/users`);
        const findUser = await res.data.find((nameInfo: User) => name === nameInfo.name);
        const verifyUser = findUser && password === findUser.password

        if (verifyUser) {
            setIsAuth(true);
            localStorage.setItem('isAuth', 'true');
            // Toast de éxito
            HandleNotification("Welcome!", "success")
            
            // Esperar un poco antes de redirigir para mostrar el toast
            setTimeout(() => {
                router.push('/dashboard');
            }, 1500);
            
        } else {
            localStorage.setItem('isAuth', 'false');
            HandleNotification("User or password incorrect!", "error")
            setName('');
            setPassword('');
        }

        if (localStorage.getItem('isAuth') === 'false') {
            router.push('/');
    }

}
return { name, setName, password, setPassword, API, isAuth, setIsAuth, URL_API };
}