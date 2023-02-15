import { useState } from "react";

const usePage = () => {
  const [page, setPage] = useState(1);

  const getNextPage = () => {
    setPage((page) => page + 1);
  };

  return { page, getNextPage };
};

export default usePage;
