"use client";
import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import CustomHeader from "./CustomHeader.jsx";
import CustomEvent from "./CustomEvent.jsx";
import CustomToolbar from "./CustomToolbar.jsx";
import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  // const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dummyEvents = [
    {
      title: "Meeting with Team",
      start: new Date(2024, 1, 20, 10, 0),
      end: new Date(2024, 1, 5, 11, 0),
      location: "WCH",
      summary: "nice event",
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 5, 11, 0),
      location: "WCH",
      summary: "lit event",
    },
  ];
  return (
    <section className="size-[80%] pt-[5%] flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="w-full m-0 p-0 text-3xl"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={dummyEvents}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              header: CustomHeader,
              toolbar: CustomToolbar,
            }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={() => {
              return {
                className:
                  "p-0 !active:ring-0 !focus:outline-0 !bg-transparent",
              };
            }}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-swim-blue-200"
                    : "!bg-white"
                }`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
        {selectedEvent && (
          <Modal setEvents={setSelectedEvent} events={selectedEvent} />
        )}
      </div>
    </section>
  );
};

export default CalendarEvents;
