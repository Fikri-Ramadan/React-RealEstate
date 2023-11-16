import { Pagination } from '@mantine/core';

const Paginations = ({ totalPage, activePage, setPage, refetch }) => {
  return (
    <Pagination
      total={totalPage}
      value={activePage}
      onChange={async (page) => {
        await setPage(page);
        window.scrollTo(0, 0);
        refetch();
      }}
    />
  );
};
export default Paginations;
