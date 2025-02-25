import { PrismaClient } from '@prisma/client';
import { TZDate } from '@date-fns/tz';

const prisma = new PrismaClient();

const DIETARY_RESTRICTIONS = {
  GLUTEN_FREE: 'Gluten free',
  LACTOSE_INTOLERANT: 'Lactose intolerant',
  VEGAN: 'Vegan',
  VEGETARIAN: 'Vegetarian',
};
const TIMEZONE = 'America/Toronto';

const createWeddingTime = (hour: number, minute: number = 0) =>
  hour >= 24
    ? new TZDate(2025, 8, 14, hour - 24, minute, TIMEZONE)
    : new TZDate(2025, 8, 13, hour, minute, TIMEZONE);

async function main() {
  // delete all data
  console.info('Deleting all data...');
  const deleteSubEventRoles = prisma.subEventRole.deleteMany();
  const deleteSubEvents = prisma.subEvent.deleteMany();
  const deleteEventRoles = prisma.eventRole.deleteMany();
  const deleteEvents = prisma.event.deleteMany();
  const deleteGuestRoles = prisma.guestRole.deleteMany();
  const deleteGuests = prisma.guest.deleteMany();
  const deleteRoles = prisma.role.deleteMany();
  await prisma.$transaction([
    deleteSubEventRoles,
    deleteSubEvents,
    deleteEventRoles,
    deleteEvents,
    deleteGuestRoles,
    deleteGuests,
    deleteRoles,
  ]);

  // create roles
  console.info('Creating roles...');
  const [bride, groom, bridesmaid, groomsman, officiant, photographer] =
    await prisma.$transaction([
      prisma.role.create({
        data: {
          name: 'Bride',
        },
      }),
      prisma.role.create({
        data: {
          name: 'Groom',
        },
      }),
      prisma.role.create({
        data: {
          name: 'Bridesmaid',
        },
      }),
      prisma.role.create({
        data: {
          name: 'Groomsman',
        },
      }),
      prisma.role.create({
        data: {
          name: 'Officiant',
        },
      }),
      prisma.role.create({
        data: {
          name: 'Photographer',
        },
      }),
    ]);

  // create guests
  console.info('Creating guests...');
  const kaity = await prisma.guest.create({
    data: {
      firstName: 'Kaitlyn',
      lastName: 'Russell',
      email: 'russellkaity@gmail.com',
      phoneNumber: '289-242-7766',
      dietaryRestrictions: [DIETARY_RESTRICTIONS.LACTOSE_INTOLERANT],
      guestRoles: {
        create: {
          roleId: bride.id,
        },
      },
    },
  });
  const zack = await prisma.guest.create({
    data: {
      firstName: 'Zackery',
      lastName: 'Harley',
      email: 'zackharley@gmail.com',
      phoneNumber: '613-662-2394',
      dietaryRestrictions: [DIETARY_RESTRICTIONS.GLUTEN_FREE],
      guestRoles: {
        create: {
          roleId: groom.id,
        },
      },
    },
  });

  // Create events
  console.info('Creating events...');
  const wedding = await prisma.event.create({
    data: {
      name: 'Wedding',
      startTime: createWeddingTime(16),
      endTime: new TZDate(2025, 8, 14, 1, 0, TIMEZONE),
      subEvents: {
        create: [
          {
            name: 'Kaity + bridesmaids hair & makeup',
            startTime: createWeddingTime(8),
            endTime: createWeddingTime(12, 30),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: bridesmaid.id,
                },
              ],
            },
          },
          {
            name: 'Zack + groomsmen get ready',
            startTime: createWeddingTime(10),
            endTime: createWeddingTime(13),
            subEventRoles: {
              create: [
                {
                  roleId: groom.id,
                },
                {
                  roleId: groomsman.id,
                },
              ],
            },
          },
          {
            name: 'Kaity + bridesmaids photos take "getting ready" photos',
            startTime: createWeddingTime(12, 30),
            endTime: createWeddingTime(13),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: bridesmaid.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Zack + groomsmen travel to wedding venue',
            startTime: createWeddingTime(13),
            endTime: createWeddingTime(13, 30),
            subEventRoles: {
              create: [
                {
                  roleId: groom.id,
                },
                {
                  roleId: groomsman.id,
                },
              ],
            },
          },
          {
            name: 'Jeremy travels to wedding venue',
            startTime: createWeddingTime(13),
            endTime: createWeddingTime(13, 30),
            subEventRoles: {
              create: [
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Zack + groomsmen take "getting ready" photos',
            startTime: createWeddingTime(13, 30),
            endTime: createWeddingTime(14),
            subEventRoles: {
              create: [
                {
                  roleId: groom.id,
                },
                {
                  roleId: groomsman.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Kaity + bridesmaids travel to wedding venue',
            startTime: createWeddingTime(13, 30),
            endTime: createWeddingTime(14),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: bridesmaid.id,
                },
              ],
            },
          },
          {
            name: 'First look & couple photos',
            startTime: createWeddingTime(14),
            endTime: createWeddingTime(14, 30),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: groom.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Private vows',
            startTime: createWeddingTime(14, 30),
            endTime: createWeddingTime(14, 45),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: groom.id,
                },
              ],
            },
          },
          {
            name: 'Take photos of reception space',
            startTime: createWeddingTime(14, 30),
            endTime: createWeddingTime(14, 45),
            subEventRoles: {
              create: [
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'First look with Scott',
            startTime: createWeddingTime(14, 45),
            endTime: createWeddingTime(14, 50),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Wedding party + immediate family photos',
            startTime: createWeddingTime(14, 50),
            endTime: createWeddingTime(15, 45),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: groom.id,
                },
                {
                  roleId: bridesmaid.id,
                },
                {
                  roleId: groomsman.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Shuttle leaves hotel',
            startTime: createWeddingTime(15, 30),
            // Make this resticted to anyone staying at the Best Western
          },
          {
            name: 'Arrive at venue',
            startTime: createWeddingTime(16),
          },
          {
            name: 'Ceremony',
            startTime: createWeddingTime(16, 30),
            endTime: createWeddingTime(17),
          },
          {
            name: 'Cocktail hour',
            startTime: createWeddingTime(17),
            endTime: createWeddingTime(18),
          },
          {
            name: 'Family photos',
            startTime: createWeddingTime(17),
            endTime: createWeddingTime(18),
            subEventRoles: {
              create: [
                {
                  roleId: bride.id,
                },
                {
                  roleId: groom.id,
                },
                {
                  roleId: photographer.id,
                },
              ],
            },
          },
          {
            name: 'Dinner + speeches',
            startTime: createWeddingTime(18),
            endTime: createWeddingTime(20, 30),
          },
          {
            name: 'Reception',
            startTime: createWeddingTime(20, 30),
            endTime: createWeddingTime(24),
          },
          {
            name: 'First shuttle leaves',
            startTime: createWeddingTime(22, 30),
          },
          {
            name: 'Last call',
            startTime: createWeddingTime(24),
          },
          {
            name: 'Last dance',
            startTime: createWeddingTime(24, 30),
          },
          {
            name: 'Last shuttle leaves',
            startTime: createWeddingTime(24, 45),
          },
          {
            name: 'Guests off the property',
            startTime: createWeddingTime(25),
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
