import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";

import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";
import { PageLink } from "../../../../_metronic/layout/core";
import Title from "../../common/Breadcrumbs/Title";
import Loader from "../../common/loader/Loader";

export interface props {
  // getDetails: Function;
  loading: boolean;
  details: any;
  error: any;
}

const Masters: React.FC<props> = ({ loading, details, error }) => {
  return (
    <>
      {/* <Title title={params.masters} />
      <KTCard>
        <UsersListHeader path={`/masters/add-${params.masters}`} />
        {loading && <Loader />}
        {!loading && details && (
          <PaginatedItems itemsPerPage={10} userList={details} />
        )}
      </KTCard> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.getAllMastersDataReducer.loading,
    error: state.getAllMastersDataReducer.error,
    details: state.getAllMastersDataReducer.getAllDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // return {
  //   getDetails: (masters: string, location: any) => {
  //     switch (masters) {
  //       case DEGREE_CONST:
  //         // dispatch(fetchAllDegrees(masters, location));
  //         break;
  //       case SOURCE_CONST:
  //         dispatch(fetchAllTaluka(masters, location));
  //         break;
  //       case SKILL_TYPE_CONST:
  //         dispatch(fetchAllForum(masters, location));
  //         break;
  //       case SKILL_CONST:
  //         dispatch(fetchAllJudgeName(masters, location));
  //         break;
  //       case RECRUITMENT_STATUS_CONST:
  //         dispatch(fetchAllBank(masters, location));
  //         break;
  //       case MODE_OF_WORK_CONST:
  //         dispatch(fetchAllDepartment(masters, location));
  //         break;
  //       case INTERVIEW_TYPE_CONST:
  //         dispatch(fetchAllBankBranch(masters, location));
  //         break;
  //       case INTERVIEWER_CONST:
  //         dispatch(fetchAllBankOfficer(masters, location));
  //         break;
  //       case INTERVIEW_MODE_CONST:
  //         dispatch(fetchAllOurAdvocate(masters, location));
  //         break;
  //       default:
  //         dispatch(fetchAllDegrees(masters, location));
  //         break;
  //     }
  //   },
  // };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Masters);
export default connectComponent;
