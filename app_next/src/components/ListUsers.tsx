import UserStore from "@/services/users";
import { User } from "@/dto/users";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HandleNotification } from "@/helpers/utils";


const userStorage = new UserStore()
const ListUsers = () => {
    const [data, setData] = useState<User[]>([])
    const [editById, setEditById] = useState<string|null>(null)
    const [editName, setEditName] = useState("")
    const [editPassword, setEditPassword] = useState("")
    const router = useRouter();
    useEffect(() => {
        const getData = async () => {
            const data = await userStorage.list()
            console.log(data)
            setData(data)
        }

        getData()
    }, [])

    const handleEdit = (user: User) => {
        setEditById(user.id ?? null)
        setEditName(user.name)
        setEditPassword(user.password)
    }

    const handleEditSave = async (id: string) => {
       await userStorage.update(id, {name: editName, password: editPassword});
    }
    return(
        <>
        {
            data.map((user) => {
                return (
                    <article key={user.id} className="bg-blue-800 m-3.5 p-5 rounded-2xl">
                        <h1> {user.name} </h1>
                        <p>User: {user.id}</p>
                        <p>Password: {user.password} </p>
                        {editById === user.id ? (<>
                            <input type="text" name="" id="" value={editName} onChange={(e) => {setEditName(e.target.value)}} />
                            <input type="text" name="" id="" value={editPassword} onChange={(e) => {setEditPassword(e.target.value)}} />
                            <button onClick={() => {handleEditSave(user.id)}}>Make changes</button>
                            <button onClick={() => {setEditById(null)}}>Cancel</button>
                            
                        </>) : (<>
                        <button className="bg-blue-500 m-3 cursor-pointer" onClick={() => handleEdit(user)}>Editar</button>
                        </>)}
                        
                        
                        <button className="bg-blue-500 m-3 cursor-pointer" onClick={ async () => { await userStorage.removeById(user.id); HandleNotification("User removed","success"); setTimeout(() => {router.replace("/dashboard")}, 2000)}  } value={user.id}>Remove</button>
                    </article>
                )
            })
        }
        </>
        
    )
}

export default ListUsers;