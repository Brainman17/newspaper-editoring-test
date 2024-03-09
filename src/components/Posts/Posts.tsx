import { Link } from "react-router-dom";
import s from "./Posts.module.css";
import { Pagination } from "../Pagination";
import { PostModel } from "../../models/postModel";
import { POSTS_PER_PAGE } from "../../constants/constants";
import useFetchData from "../../services/useFetchData";
import { useState } from "react";
import { Nullable } from "../../types/Nullable";

export const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const posts: Nullable<PostModel[]> = useFetchData();

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;

  console.log(posts);

  let currentPosts;

  if (posts) {
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  }

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Post</th>
            <th>Completed</th>
          </tr>
        </thead>
        {currentPosts &&
          currentPosts.map(({ id, title, completed }) => (
            <tbody>
              <tr>
                <td>{id}</td>
                <td>
                  <Link to={`/${id}`}>{title}</Link>
                </td>
                <td>{completed.toString()}</td>
              </tr>
            </tbody>
          ))}
      </table>
      <span className={s.page}>Page: {currentPage}</span>
      <Pagination setCurrentPage={setCurrentPage} posts={posts} />
    </div>
  );
};
