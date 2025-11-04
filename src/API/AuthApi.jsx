import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonfolder.typicode.com",
});

export const getPost = () =>{
    return api.get("/posts")
}