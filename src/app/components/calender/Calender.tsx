// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { INITIAL_EVENTS, createEventId } from "../../helpers/event-utils";

// export interface props {}

const Calender = () => {
  //   const [state, setState] = useState({
  //     weekendsVisible: true,
  //     currentEvents: [],
  //   });
  //   //   const handleWeekendsToggle = () => {
  //   //     setState({
  //   //       ...state,
  //   //       weekendsVisible: !state.weekendsVisible,
  //   //     });
  //   //   };
  //   //   const renderEventContent = (eventInfo: any) => {
  //   //     return (
  //   //       <>
  //   //         <b>{eventInfo.timeText}</b>
  //   //         <i>{eventInfo.event.title}</i>
  //   //       </>
  //   //     );
  //   //   };
  //   //   const renderSidebarEvent = (event: any) => {
  //   //     return (
  //   //       <li key={event.id}>
  //   //         <b>{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</b>
  //   //         <i>{event.title}</i>
  //   //       </li>
  //   //     );
  //   //   };
  //   const handleDateSelect = (selectInfo: any) => {
  //     let title = prompt("Please enter a new title for your event");
  //     let calendarApi = selectInfo.view.calendar;
  //     calendarApi.unselect(); // clear date selection
  //     if (title) {
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   };
  //   // const handleEventClick = (clickInfo: any) => {
  //   //   if (prompt(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //   //     clickInfo.event.remove();
  //   //   }
  //   // };
  //   const handleEvents = (events: any) => {
  //     setState({
  //       ...state,
  //       currentEvents: events,
  //     });
  //   };
  //   return (
  //     <div className="demo-app">
  //       {/* <div className="demo-app-sidebar">
  //         <div className="demo-app-sidebar-section">
  //           <label>
  //             <input type="checkbox" checked={state.weekendsVisible} onChange={handleWeekendsToggle}></input>
  //             toggle weekends
  //           </label>
  //         </div>
  //         <div className="demo-app-sidebar-section">
  //           <h2>All Events ({state.currentEvents.length})</h2>
  //           <ul>{state.currentEvents.map(renderSidebarEvent)}</ul>
  //         </div>
  //       </div> */}
  //       <div className="demo-app-main">
  //         <FullCalendar
  //           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
  //           headerToolbar={{
  //             left: "prev,next today",
  //             center: "title",
  //             right: "dayGridMonth,timeGridWeek,timeGridDay",
  //           }}
  //           initialView="dayGridMonth"
  //           editable={true}
  //           selectable={true}
  //           selectMirror={true}
  //           dayMaxEvents={true}
  //           weekends={state.weekendsVisible}
  //           initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
  //           select={handleDateSelect}
  //           // eventClick={handleEventClick}
  //           eventsSet={handleEvents} // called after events are initialized/added/changed/removed
  //           //   eventContent={renderEventContent} // custom render function
  //           /* you can update a remote database when these fire:
  //             eventAdd={function(){}}
  //             eventChange={function(){}}
  //             eventRemove={function(){}}
  //             */
  //         />
  //       </div>
  //     </div>
  //   );
};
export default Calender;
