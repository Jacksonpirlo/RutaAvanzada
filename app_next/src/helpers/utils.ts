import { types, User } from "@/dto/users";
import axios from "axios";
import { toast } from "react-toastify";


import img1 from '../../public/img/img1.png'
import img2 from '../../public/img/img2.png'
import img3 from '../../public/img/img3.png'
import img4 from '../../public/img/img4.png'
import img5 from '../../public/img/img5.png'
import img6 from '../../public/img/img6.png'
import icon from '../../public/img/Icon.png'
import icon1 from '../../public/img/Icon (1).png'



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
    

export const imgAndIcon = () => {
        return{img1, img2, img3, img4, img5, img6, icon, icon1}
    }
    

    export default UserStore;