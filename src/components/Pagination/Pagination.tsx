import clsx from "clsx";
import { POSTS_PER_PAGE } from "../../constants/constants";
import { PostModel } from "../../models/postModel";
import s from "./Pagination.module.css";

type Props = {
  setCurrentPage: (arg: number) => void;
  posts: PostModel[];
};

export const Pagination = ({ posts, setCurrentPage }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / POSTS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={s.wrapper}>
      {pageNumbers.map((number) => (
        <button
          className={clsx(s.btn, s.classBtn)}
          key={number}
          onClick={() => paginate(number)}
        >
          <a>{number}</a>
        </button>
      ))}
    </div>
  );
};
