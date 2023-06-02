import clsx from "clsx";
import { FC, PropsWithChildren, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { HeaderProps } from "react-table";
import { getSearchParameter } from "../../../../../../helpers/helperFunction";
import { User } from "../../core/_models";

type Props = {
  className?: string;
  title?: string;
  tableProps: PropsWithChildren<HeaderProps<User>>;
};
const UserCustomHeader: FC<Props> = ({ className, title, tableProps }) => {
  const id = tableProps.column.id;
  const [searchParam, setSearchParam] = useSearchParams();
  const searchObj = useMemo(() => getSearchParameter(searchParam), [searchParam]);
  const params = useParams();

  const sortColumn = async () => {
    if (id !== "NULL" && id !== "actions" && id !== "contact" && id !== "Mobile" && id !== "Address" && id!== 'Borrowers') {
      let orderby = searchParam.get("OrderBy") == null ? "asc" : searchParam.get("OrderBy") === "asc" ? "desc" : "asc";
      setSearchParam({
        ...searchObj,
        PageNumber: "1",
        SortBy: id,
        OrderBy: String(orderby),
      });
    }
  };

  return (
    <th
      {...tableProps.column.getHeaderProps()}
      style={{ cursor: "pointer" }}
      className={clsx(
        searchParam.get("OrderBy") && searchParam.get("SortBy") === id && `table-sort-${searchParam.get("OrderBy") === "asc" ? "asc" : "desc"}`,
        id !== "NULL" && "cursor-pointer",
        `${className}`
      )}
      onClick={sortColumn}
    >
      {title === "Name" ? params.masters?.replace(/-/g, " ") : title}
      {/* {params.masters} {title} */}
    </th>
  );
};

export { UserCustomHeader };
