/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { initialQueryState, KTSVG, useDebounce } from "../../../../../../../_metronic/helpers";
import { capitalizeFirstLetter } from "../../../../../../helpers/helperFunction";
import { useQueryRequest } from "../../core/QueryRequestProvider";
import { VIEW_USER } from "../../../../../../helpers/routesConstant";

const UsersListSearchComponent = () => {
  const { updateState } = useQueryRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const params = useParams();
  const location = useLocation();
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 150);
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
        updateState({ search: debouncedSearchTerm, ...initialQueryState });
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
  );

  const handleSearch = (e: any) => {
    setSearchParams({
      PageNumber: "1",
      Search: e.target.value,
    });
  };



  return (
    <div className="card-title">
      <div className="d-flex align-items-center position-relative my-1">
        <KTSVG path="/media/icons/duotune/general/gen021.svg" className="svg-icon-1 position-absolute ms-6" />
        <input
          type="text"
          data-kt-user-table-filter="search"
          className="form-control form-control-solid search-bar ps-14"
          placeholder={
            location.pathname === VIEW_USER ? "Search User" : `Search ${capitalizeFirstLetter(params?.masters?.replace(/-/g, " ")) || "Case"}`
          }
          value={searchParams.get("Search") || ""}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export { UsersListSearchComponent };
