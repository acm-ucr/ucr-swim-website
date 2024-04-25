import CalendarEvents from "@/components/calendar/CalendarEvents";
import PageTitle from "@/components/PageTitle";
import events from "@/public/events.webp";
const Calendar = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Events" image={events} />
      <CalendarEvents />
    </div>
  );
};

export default Calendar;
