import UserStore from "@/services/users";
import { useRouter } from "next/router";
import { useState } from "react";
const CreateUser = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const userStorage = new UserStore();
    const sendData = () => {
        const data = {
            name,
            password
        }
        console.log(data)
        return userStorage.create(data);
    }
    return(
        <>
        <section>
            <h1>Create user</h1>
            <label htmlFor="">Name:</label>
            <input type="text" name="" id="" onChange={(e) => {setName(e.target.value)}} />
            <label htmlFor="">Password</label>
            <input type="password" name="" id=""onChange={(e) => {setPassword(e.target.value)}} />
            <input type="submit" value="Register" onClick={() => {sendData(); router.back()}} />
        </section>
        </>
    )
}

export default CreateUser;