"use client";
import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState, useEffect } from "react";
import CustomHeader from "./CustomHeader.jsx";
import CustomEvent from "./CustomEvent.jsx";
import CustomToolbar from "./CustomToolbar.jsx";
import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    const startDate = new Date(
      new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const endDate = new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);
          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex justify-center items-center ">
        <div className="h-[95vh] sm:w-[75%] w-full relative">
          <Calendar
            className="w-full m-0 p-0 2xl:text-3xl text-xl"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={events}
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
                  "!p-0 !active:ring-0 !focus:outline-0 !bg-transparent",
              };
            }}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-swim-blue-100"
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
        {console.log(selectedEvent)}
      </div>
    </section>
  );
};

export default CalendarEvents;
