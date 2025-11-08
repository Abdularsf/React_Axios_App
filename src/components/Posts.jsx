import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/AuthAPI";
import "../App.css";

export const Posts = () => {

    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data)
    }

    useEffect(() => {
        getPostData();
    }, [])

    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id);
        } catch (error) {
            
        }
    }

    return (
        <section className="section-post">
            <ol>
                {
                    data.map((curElem) => {
                        const { id, body, title } = curElem;
                        return (
                            <li key={id}>
                                <p>Title: {title}</p>
                                <p>Body: {body}</p>
                                <button>Edit</button>
                                <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}