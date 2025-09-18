import { User } from "@/dto/users";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const UseLogin = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const URL_API = 'http://localhost:3000';

    async function API(url: string = 'http://localhost:3000') {
    const res = await axios.get(`${url}/users`);
    const findUser = await res.data.find((nameInfo: User) => name === nameInfo.name);
    const verifyUser = findUser && password == findUser.password;


    if (verifyUser) {
      router.push('/dashboard');
      setIsAuth(true)
      
    } else {
      alert('Contraseña o usuario incorrectos');
      setName('');
      setPassword('');
    }
  }
  
  return { name, setName, password, setPassword, API, isAuth, setIsAuth, URL_API };
}