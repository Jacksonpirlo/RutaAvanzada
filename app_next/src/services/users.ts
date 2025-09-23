import { User } from "@/dto/users";
import axios from "axios";
const URL_API = 'http://localhost:3000';

class UserStore {
    list = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data as User[];
    }

    create = async (data: User) => {
        await axios.post(`${URL_API}/users`, data);
        console.log('Data back', data)
    }

    findByName = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data as User[];
    }

    removeById = async (id?: string) => {
        const res = await axios.delete(`${URL_API}/users/${id}`);
        return res.data;
    }

    update = async (id: string, data: Pick<User, 'name' | 'password'>) => {
        const res = await axios.put(`${URL_API}/users/${id}`, data);
        return res.data;
    }
}


export default UserStore;