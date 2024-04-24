import React, { useEffect, useMemo, useState } from "react";
import { useCalendar } from "@/contexts/PlannerContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { DateRangePicker } from "../ui/date-range-picker";
import { DateRange } from "react-day-picker";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import { useData } from "@/contexts/PlannerDataContext";
import AddAppointmentDialog from "./AddAppointmentDialog";

interface CalendarToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  className,
  ...props
}) => {
  const { setDateRange } = useCalendar();
  const { addResource, addAppointment } = useData();

  const [range, setRange] = useState<DateRange>({
    from: startOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
    to: endOfWeek(new Date()),
  });
  const handleDateRangeUpdate = (range: DateRange) => {
    const from = range.from;
    const to = range.to ?? endOfDay(range.from as Date);
    setDateRange({
      from:from,
      to:to
    });
  };
  useEffect(() => {
    setDateRange(range);
  }, [range]);

  return (
    <div
      className={cn("flex items-center justify-end space-x-2", className)}
      {...props}
    >
      <AddAppointmentDialog/>
      <DateRangePicker
        onUpdate={(value) => handleDateRangeUpdate(value.range)}
        initialDateFrom={range.from}
        initialDateTo={range.to}
        align="start"
        showCompare={false}
      />
    </div>
  );
};

export default React.memo(CalendarToolbar);
