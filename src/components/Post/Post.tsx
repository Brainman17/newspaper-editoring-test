import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../constants/constants";
import s from "./Post.module.css";

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${BASEURL}/${id}`);
        const { title } = await res.json();
        setPostTitle(title);
      })();
    } catch (error) {
      console.log(error);
      alert("Ошибка при получении поста");
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className={s.post}>
      <h2>ID: {id}</h2>
      <h3>
        Title: <span className={s.postTitle}>{postTitle}</span>
      </h3>
    </div>
  );
};
