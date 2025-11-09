import { useState } from "react"
import { postData } from "../API/AuthAPI";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            });
    }, [updateDataApi]);

    const isEmpty = Object.keys(updateDataApi).length == 0;

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const addPostData = async () => {
        const res = await postData(addData);
        if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "", })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if (action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            updatePostData();
        }
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
            <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
        </form>
    )
}