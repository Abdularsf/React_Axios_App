import { useState } from "react"
import { postData } from "../API/AuthAPI";

export const Form = ({data,setData}) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const handleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) =>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const addPostData = async () =>{
        const res = await postData(addData);
        if(res.status === 201){
            setData([...data,res.data]);
            setAddData({title: "",body: "",})
        }
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addPostData();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Add Tile"
                    autoComplete="off"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    name="body"
                    id="body"
                    autoComplete="off"
                    placeholder="Add Text"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}