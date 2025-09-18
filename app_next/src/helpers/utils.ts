import { User } from "@/dto/users";
import axios from "axios";
const URL_API = 'http://localhost:3000';

class UserStore {
    list = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data;
    }

    findByName = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data;
    }

    removeById = async (id?: User) => {
        const res = await axios.delete(`${URL_API}/users/${id}`);
        return res.data;
    }
}


export default UserStore;