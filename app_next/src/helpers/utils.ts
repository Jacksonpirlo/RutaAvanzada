import { types, User } from "@/dto/users";
import axios from "axios";
import { toast } from "react-toastify";
const URL_API = 'http://localhost:3000';

class UserStore {
    list = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data;
    }

    create = async (data: string) => {
        axios.post(`${URL_API}/users`, data);
    }

    findByName = async () => {
        const res = await axios.get(`${URL_API}/users`);
        return res.data;
    }

    removeById = async (id?: string) => {
        const res = await axios.delete(`${URL_API}/users/${id}`);
        return res.data;
    }

    update = async (id?: User, data?: User) => {
        const res = await axios.put(`${URL_API}/${id}`, data)
        return res.data
    }
}

export const HandleNotification = (text: string, type: types) => {
    if (type === "success") {
        toast.success(text, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
    } else if (type === "error") {
        toast.error(text, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
    } else if (type === "warning") {
        toast.warning(text, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
    }   else if(type === "info") {
        toast.info(text, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
    }
}


export default UserStore;