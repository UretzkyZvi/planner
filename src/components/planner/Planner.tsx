import React, { FC, useEffect } from "react";
import CalendarToolbar from "./PlannerToolbar";
import Appointment from "./Appointment";
import { Appointment as AppointmentType, Resource } from "@/models";
import {
  PlannerDataContextProvider,
  useData,
} from "@/contexts/PlannerDataContext";
import { PlannerProvider, useCalendar } from "@/contexts/PlannerContext";
import { Timeline } from "./Timeline";
import { Table, TableBody, TableRow } from "../ui/table";
import ResourceTableCell from "./ResourceTableCell";
import { calculateNewDates, filterAppointments } from "@/lib/utils";
import DropTableCell from "./DropTableCell";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

export interface PlannerProps extends React.HTMLAttributes<HTMLDivElement> {
  initialResources: Resource[];
  initialAppointments: AppointmentType[]; 
}

const Planner: React.FC<PlannerProps> = ({
  initialResources,
  initialAppointments,
  ...props
}) => {
  return (
    <PlannerDataContextProvider
      initialAppointments={initialAppointments}
      initialResources={initialResources}
    >
      <PlannerProvider>
        <PlannerMainComponent {...props} />
      </PlannerProvider>
    </PlannerDataContextProvider>
  );
};

export interface PlannerMainComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PlannerMainComponent: FC<PlannerMainComponentProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-2  ">
      <CalendarToolbar />
      <CalendarContent {...props} />
    </div>
  );
};

interface CalendarContentProps extends React.HTMLAttributes<HTMLDivElement> {}
const CalendarContent: React.FC<CalendarContentProps> = ({ ...props }) => {
  const { viewMode, dateRange, timeLabels } = useCalendar();
  const { resources, appointments, updateAppointment } = useData();

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0]?.data;
        const sourceData = source.data;

        if (!destination || !sourceData) return;

        const appointment = appointments.find(
          (appt) => appt.id === sourceData.appointmentId,
        );
        if (!appointment) return;

        const newResource = resources.find(
          (res) => res.id === destination.resourceId,
        );
        if (!newResource) return;

        const newDates = calculateNewDates(
          viewMode,
          destination.columnIndex as unknown as number,
          sourceData.columnIndex as unknown as number,
          {
            from: appointment.start,
            to: appointment.end,
          },
        );

        updateAppointment({
          ...appointment,
          start: newDates.start as Date,
          end: newDates.end as Date,
          resourceId: newResource.id,
        });
      },
    });
  }, [appointments]);

  return (
    <div className="flex max-h-[calc(80vh_-_theme(spacing.16))] flex-col  ">
      <div className="calendar-scroll flex-grow overflow-auto">
        <Table>
          <Timeline />
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <ResourceTableCell resourceItem={resource} />
                {timeLabels?.map((label, index) => (
                  <DropTableCell
                    resourceId={resource.id}
                    columnIndex={index}
                    key={index}
                  >
                    {appointments
                      .filter(
                        (appt) =>
                          filterAppointments(
                            appt,
                            index,
                            dateRange,
                            viewMode,
                          ) && appt.resourceId === resource.id,
                      )
                      .sort((a, b) => a.start.getTime() - b.start.getTime())
                      .map((appt) => (
                        <Appointment
                          appointment={appt}
                          columnIndex={index}
                          resourceId={resource.id}
                          key={appt.id}
                        />
                      ))}
                  </DropTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Planner;
