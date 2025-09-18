import UserStore from "@/helpers/utils";
import { User } from "@/dto/users";
import { useEffect, useState } from "react";
const ListUsers = () => {
    const [data, setData] = useState<User[]>([])
    const [manageData, setManageData] useState<User[]>([])
    useEffect(() => {
        const getData = async () => {
            const userStorage = new UserStore()
            const data = await userStorage.list()
            const manageData =  userStorage;
            console.log(data)
            setData(data)
        }

        getData()
    }, [])
    return(
        <>
        {
            data.map((user) => {
                return (
                    <article key={user.id} className="bg-blue-800 m-3.5 p-5 rounded-2xl">
                        <h1> {user.name}</h1>
                        <p>User: {user.id}</p>
                        <p>Password: {user.password} </p>
                        <button className="bg-blue-500 m-3 cursor-pointer" onChange={(e) => manage} value={user.id}>Edit</button>
                        <button className="bg-blue-500 m-3 cursor-pointer" onChange={() =>} value={user.id}>Remove</button>
                    </article>
                )
            })
        }
        </>
    )
}

export default ListUsers;