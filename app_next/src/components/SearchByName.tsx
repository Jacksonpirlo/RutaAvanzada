import UserStore from "@/helpers/utils";
import { User } from "@/dto/users";
import { useEffect, useState } from "react";

const SearchByName = () => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState<User[]>([])
    useEffect(() => {
        const getData = async () => {
            const userStorage = new UserStore()
            const data = await userStorage.findByName()
            console.log(data)
        }

        getData()
    }, [query])

    return(
        <>
        <label htmlFor="">Search by name</label>
        <input className="bg-blue-900 text-blue-50 ml-1.5" type="text" name="" id="" value={query} onChange={(e) => setData(e.target.value)} />

        {
            data.map((user) => {
                return(
                   
                    <section key={user.id}>
                        <p>{user.name}</p>
                    </section>
                    
                )
            })
        }
        </>
    )
}

export default SearchByName;