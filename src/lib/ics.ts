import { Prisma } from '@prisma/client';
import ical, { ICalCalendarMethod, ICalEventStatus } from 'ical-generator';

type Event = Prisma.EventGetPayload<object>;

export function generateICS(event: Event) {
  const calendar = ical({
    name: 'Kaitlyn & Zackery Are Getting Married',
    description: 'Join us for our wedding!',
    timezone: 'America/Toronto',
    events: [
      {
        id: event.id,
        start: event.startTime,
        end: event.endTime,
        summary: event.name,
        description: event.description,

        //TODO: Add event support
        // location: event.,
        organizer: {
          name: 'Kaitlyn Russell and Zackery Harley',
          email: 'hello@harleyeverafter.com',
        },
        url: `https://harleyeverafter.com/events/${event.id}`,
        sequence: 0, // Increment this when event is updated
        status: ICalEventStatus.CONFIRMED,
      },
    ],
    method: ICalCalendarMethod.REQUEST,
  });

  return calendar.toString();
}
