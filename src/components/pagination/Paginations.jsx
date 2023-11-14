import { Pagination } from '@mantine/core';

const Paginations = ({ totalPage, activePage, setPage, refetch }) => {
  return (
    <Pagination
      total={totalPage}
      value={activePage}
      onChange={async (page) => {
        await setPage(page);
        refetch();
      }}
    />
  );
};
export default Paginations;
