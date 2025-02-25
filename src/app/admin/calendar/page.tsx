// import AdminCalendar from '@/app/components/AdminCalendar';
import AdminCalendar from '@/app/components/AdminCalendar';
import { prisma } from '@/lib/prisma';

export default async function AdminCalendarPage() {
  const events = await prisma.event.findMany({
    select: {
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      subEvents: {
        select: {
          name: true,
          description: true,
          startTime: true,
          endTime: true,
          subEventRoles: true,
        },
      },
      eventRoles: true,
    },
  });
  const roles = await prisma.role.findMany();
  return <AdminCalendar events={events} roles={roles} />;
}
