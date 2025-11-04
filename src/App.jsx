import { useEffect } from "react"
import { getPost } from "./API/AuthAPI"

export const App = () => {

  const getPostData = async () => {
    const res = await getPost();
  }

  useEffect(() => {
    getPostData();
  }, [])

  return <h1>Hello React Crud Operation</h1>
}