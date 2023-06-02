import { FC } from "react";

type props = {
  itemsPerPage: number;
  itemLength: number;
  currentPage: number;
  handleClick: Function;
};

interface ItemsProps {
  currentItems: any;
  isLoading: boolean;
  data: any;
}

const Paginate: FC<props> = ({
  itemLength,
  itemsPerPage,
  currentPage,
  handleClick,
}): any => {
  const pageCount = Math.ceil(itemLength / itemsPerPage);

  let btn = [];
  let pageLimit = 5;
  let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

  btn.push(
    <button
      className="table-list-pagination-btn"
      onClick={() => handleClick(+currentPage - 1)}
      disabled={+currentPage === 1}
    >
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  );

  for (let i = 0; i < pageLimit; i++) {
    let num = start + i + 1;

    if (num > pageCount) break;

    btn.push(
      <button
        key={num}
        className={`table-list-pagination-btn ${
          +currentPage === +num ? "table-list-active" : ""
        }`}
        onClick={() => handleClick(num)}
        disabled={+currentPage === +num}
      >
        {num}
      </button>
    );
  }

  btn.push(
    <button
      className="table-list-pagination-btn"
      onClick={() => handleClick(+currentPage + 1)}
      disabled={+currentPage === pageCount}
    >
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  );

  return btn;
};

export { Paginate };
