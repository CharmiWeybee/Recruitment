import React, { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useWindowSize } from "../../../helpers/useWindowSize";
import { KTCard, KTCardBody, KTSVG } from "../../../../_metronic/helpers";
import {
  ADD_CANDIDATE,
  ADD_INTERVIEW,
  CANDIDATE_DETAIL,
} from "../../../helpers/routesConstant";
import Loader from "../../common/loader/Loader";
import { connect } from "react-redux";
import { fetchAllCandidates } from "../../../reducers/Candidates/candidateAction";
import { Paginate } from "../../common/Paginate";
import {
  getSearchParameter,
  searchparam,
} from "../../../helpers/helperFunction";

interface Props {
  getCandidates: any;
  candidateListRes: any;
  candidateListLoading: any;
  candidateListErr: any;
}

const CandidateReport = ({
  getCandidates,
  candidateListRes,
  candidateListLoading,
}: Props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isMobile, windowSize } = useWindowSize();
  const [searchParam, setSearchParam] = useSearchParams();
  const searchObj = useMemo(
    () => getSearchParameter(searchParam),
    [searchParam]
  );

  useEffect(() => {
    getCandidates(searchObj.page, { ...searchObj });
  }, []);

  const handlePagination = (page: any) => {
    const updatedSearchObj = { ...searchObj, page: page };
    setSearchParam(updatedSearchObj);
    getCandidates(updatedSearchObj);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("Search", event.target.value);
    updatedSearchParams.set("page", "1");

    const updatedSearchObj = getSearchParamsObject(
      Object.fromEntries(updatedSearchParams.entries())
    );
    setSearchParam(updatedSearchObj);
    getCandidates(updatedSearchObj);
  };

  const getSearchParamsObject = (
    searchParams: Record<string, string | undefined>
  ) => {
    const searchObj: any = {};
    Object.entries(searchParams).forEach(([key, value]) => {
      searchObj[key] = value?.toString() || "";
    });
    return searchObj;
  };

  return (
    <div>
      <KTCard>
        <div className="card-header border-0 pt-6 flex-nowrap">
          <div className="card-title">
            <div className="d-flex align-items-center position-relative my-1">
              <KTSVG
                path="/media/icons/duotune/general/gen021.svg"
                className="svg-icon-1 position-absolute ms-6"
              />
              {/* <input
                type="text"
                data-kt-user-table-filter="search"
                className="form-control form-control-solid search-bar ps-14"
                value={searchParam.get("Search") || ""}
                onChange={handleSearch}
              /> */}
              <input
                type="text"
                data-kt-user-table-filter="search"
                className="form-control form-control-solid search-bar ps-14"
                value={searchParams.get("Search") || ""}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="card-toolbar">
            <div
              className="d-flex justify-content-end"
              data-kt-user-table-toolbar="base"
            ></div>
            <button
              type="button"
              className={`btn btn-primary ${isMobile && "p-3"}`}
              onClick={() => navigate(ADD_CANDIDATE)}
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr075.svg"
                className={`svg-icon-2 ${isMobile && "m-0"}`}
              />
              {isMobile ? null : "Add"}
            </button>
          </div>
        </div>
        <KTCardBody className="py-4">
          {candidateListLoading && <Loader />}
          {!candidateListLoading &&
            candidateListRes &&
            candidateListRes.length > 0 && (
              <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                  <tr>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Id
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      candidate name
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      contact number
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      recruitment status
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Total experiance
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Skills
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 fw-bold">
                  {!candidateListLoading &&
                    candidateListRes &&
                    candidateListRes.map((list: any, index: any) => {
                      return (
                        <tr>
                          <th scope="row">{list.id}</th>
                          <td>{list.name}</td>
                          <td>{list.contect_no}</td>
                          <td>{list.recruitment_status}</td>
                          {list.total_experience === "1" ? (
                            <td>{list.total_experience} Year</td>
                          ) : (
                            <td>{list.total_experience} Years</td>
                          )}
                          <td>{list.skills}</td>
                          <td>
                            {" "}
                            <span
                              className="btn btn-sm btn-icon btn-light-primary me-4"
                              title="View Details"
                              onClick={() =>
                                navigate(`${CANDIDATE_DETAIL}/${list.id}`)
                              }
                            >
                              <i className="fa fa-eye"></i>
                            </span>
                            <span
                              className="btn btn-sm btn-icon btn-light-primary me-4"
                              title="Edit"
                              onClick={() =>
                                navigate(`${ADD_CANDIDATE}/${list.id}`)
                              }
                            >
                              <KTSVG
                                path="/media/icons/duotune/art/art005.svg"
                                className="svg-icon-3"
                              />
                            </span>
                            <span
                              className="btn btn-sm btn-icon btn-light-primary me-4"
                              title="Resume"
                            >
                              <a
                                href={list.resume_id}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <KTSVG
                                  path="/media/icons/duotune/general/gen005.svg"
                                  className="svg-icon-3"
                                />
                              </a>
                            </span>
                            <span
                              className="btn btn-sm btn-icon btn-light-primary me-4"
                              title="Schedule Interview"
                              onClick={() =>
                                navigate(`${ADD_INTERVIEW}/${list.id}`)
                              }
                            >
                              <i className="fa fa-clock"></i>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
        </KTCardBody>
      </KTCard>
      <div className="d-flex justify-content-end">
        <Paginate
          itemsPerPage={5}
          itemLength={Number(candidateListRes?.totalCount)}
          currentPage={Number(searchObj.page || 1)}
          handleClick={handlePagination}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    candidateListRes: state.getAllCandidateReducer.data,
    candidateListLoading: state.getAllCandidateReducer.loading,
    candidateListErr: state.getAllCandidateReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCandidates: (searchObj: searchparam) =>
      dispatch(fetchAllCandidates(searchObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateReport);
