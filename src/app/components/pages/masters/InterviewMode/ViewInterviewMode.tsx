import React, { useEffect } from "react";
import { KTCard, KTCardBody, KTSVG } from "../../../../../_metronic/helpers";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useWindowSize } from "../../../../helpers/useWindowSize";
import {
  fetchAllInterviewMode,
  fetchAllSkill,
} from "../../../../reducers/mastersReducers/mastersAction";
import { connect } from "react-redux";
import Loader from "../../../common/loader/Loader";
import {
  ADD_INTERVIEW_MODE,
  ADD_SKILL,
} from "../../../../helpers/routesConstant";

interface Props {
  getData: any;
  listRes: any;
  listLoading: any;
  listErr: any;
}

const ViewInterviewMode = ({ getData, listRes, listLoading }: Props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isMobile, windowSize } = useWindowSize();

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e: any) => {
    setSearchParams({
      PageNumber: "1",
      Search: e.target.value,
    });
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
              onClick={() => navigate(ADD_INTERVIEW_MODE)}
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
          {listLoading && <Loader />}
          {!listLoading && listRes && listRes.length > 0 && (
            <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
              <thead>
                <tr>
                  <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    Id
                  </th>
                  <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    interview mode
                  </th>
                  <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    status
                  </th>
                  <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 fw-bold">
                {!listLoading &&
                  listRes &&
                  listRes.map((list: any, index: any) => {
                    return (
                      <tr>
                        <th scope="row">{list.id}</th>
                        <td>{list.interview_mode}</td>
                        <td>
                          {list.status === 1 ? (
                            <span className="badge badge-lg badge-light-success fw-bold my-2">
                              Active
                            </span>
                          ) : (
                            <span className="badge badge-lg badge-light-danger fw-bold my-2">
                              In Active
                            </span>
                          )}
                        </td>
                        <td>
                          {" "}
                          <span
                            className="btn btn-sm btn-icon btn-light-primary me-4"
                            onClick={() =>
                              navigate(`${ADD_INTERVIEW_MODE}/${list.id}`)
                            }
                          >
                            <KTSVG
                              path="/media/icons/duotune/art/art005.svg"
                              className="svg-icon-3"
                            />
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
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    listRes: state.getAllInterviewModeReducer.data,
    listLoading: state.getAllInterviewModeReducer.loading,
    listErr: state.getAllInterviewModeReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(fetchAllInterviewMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewInterviewMode);
