import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchInterview } from "../../../reducers/Interviews/interviewAction";

interface Props {
  interviewsLoading: any;
  interviewsResponse: any;
  dispatchInterview: any;
}

function Dashboard({
  interviewsLoading,
  interviewsResponse,
  dispatchInterview,
}: Props) {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    dispatchInterview();
  }, []);

  useEffect(() => {
    if (!interviewsLoading && interviewsResponse) {
      let tempList = interviewsResponse.map((interview: any) => {
        let starttime = new Date(interview?.date);
        let endtime = new Date(interview?.date);
        endtime.setHours(starttime.getHours() + 1);
        return {
          candidateId: interview?.candidate?.id,
          id: interview?.id,
          name: interview?.candidate?.name,
          description: interview?.interview_type?.interview_type,
          start: starttime,
          end: endtime,
        };
      });
      setTableData(tempList);
    }
    // }, [interviewsListProps])
  }, [interviewsLoading, interviewsResponse]);

  const Custoemevent = (event: any) => {
    navigate("/interview/" + event.candidateId);
  };
  const localizer = momentLocalizer(moment);

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid px-5">
          <div className="" style={{ minHeight: 500 }}>
            <Calendar
              selectable={true}
              localizer={localizer}
              step={30}
              defaultView="week"
              views={["week", "day"]}
              defaultDate={new Date()}
              scrollToTime={new Date(1970, 1, 1, 6)}
              onSelectEvent={(event: any) => Custoemevent(event)}
              events={tableData ? tableData : []}
              showMultiDayTimes
              style={{ minHeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStatetoProps = (state: any) => {
  return {
    // interviewsListProps: state?.getAllInterviewsReducer?.InterviewsList,

    interviewsLoading: state.viewInterviewReducer.loading,
    interviewsResponse: state.viewInterviewReducer.data.data,
    interviewsError: state.viewInterviewReducer.error,
  };
};

const mapDispatchtoProps = {
  // getAllInterviewAction: () => getAllInterview(),
  dispatchInterview: () => fetchInterview(),
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Dashboard);
