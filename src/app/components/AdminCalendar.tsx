'use client';

import { useState } from 'react';
import {
  Box,
  Grid,
  Grid2,
  Paper,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Event, EventRole, Role } from '@prisma/client';

function getTimeBlockPosition(date: Date, startHour: number): number {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (hours - startHour + minutes / 60) * 100;
}

function getTimeBlockHeight(startTime: Date, endTime: Date): number {
  const diffInHours =
    (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
  return diffInHours * 100;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

const HourCell = styled(Box)(({ theme }) => ({
  height: 100,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
}));

const EventBox = styled(Paper, {
  shouldForwardProp: (prop) =>
    prop !== 'top' && prop !== 'height' && prop !== 'isSubEvent',
})<{ top: number; height: number; isSubEvent: boolean }>(
  ({ theme, top, height, isSubEvent }) => ({
    position: 'absolute',
    left: theme.spacing(1),
    right: theme.spacing(1),
    top: top,
    height: height,
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: isSubEvent
      ? theme.palette.primary.light
      : theme.palette.primary.main,
    color: isSubEvent
      ? theme.palette.primary.contrastText
      : theme.palette.common.white,
    '&:hover': {
      zIndex: 1,
    },
  }),
);

export default function AdminCalendar({
  events,
  roles,
  defaultStartHour = 8,
  defaultEndHour = 24,
}: {
  events: unknown[];
  roles: Role[];
  defaultStartHour?: number;
  defaultEndHour?: number;
}) {
  const [startHour] = useState(defaultStartHour);
  const [endHour] = useState(defaultEndHour);
  const hours = Array.from(
    { length: endHour - startHour },
    (_, i) => startHour + i,
  );
  const theme = useTheme();

  const getEventsForRole = (roleId: number, roleName: string) => {
    return (events as { eventRoles: EventRole[] }[]).filter((event) => {
      if (event.eventRoles.length === 0) {
        return true;
      }
      return event.eventRoles.some((role) => role.roleId === roleId);
    });
  };

  const getSubEventsForRole = (roleId: number, roleName: string) => {
    const subEvents = events
      .filter((event) => event.subEvents.length > 0)
      .flatMap((event) => event.subEvents)
      .filter((subEvent) => {
        console.log(subEvent);
        if (subEvent.subEventRoles.length === 0) {
          return true;
        }
        return subEvent.subEventRoles.some((role) => role.roleId === roleId);
      });

    console.log(subEvents);
    return subEvents;
  };

  return (
    <Paper elevation={3} sx={{ height: 800, overflow: 'auto' }}>
      <Grid container>
        {/* Time column */}
        <Grid
          item
          xs={2}
          sx={{
            borderRight: `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.default',
          }}
        >
          <Box
            sx={{
              height: 64,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          />
          {hours.map((hour) => (
            <HourCell key={hour}>
              <Typography variant="caption">
                {hour % 12 || 12}
                {hour >= 12 ? 'pm' : 'am'}
              </Typography>
            </HourCell>
          ))}
        </Grid>

        {/* Roles columns */}
        <Grid item xs={10}>
          <Grid container>
            {roles.map((role) => (
              <Grid
                item
                xs
                key={role.id}
                sx={{ borderRight: `1px solid ${theme.palette.divider}` }}
              >
                <Box
                  sx={{
                    height: 64,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'sticky',
                    top: 0,
                    bgcolor: 'background.paper',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="subtitle2">{role.name}</Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  {hours.map((hour) => (
                    <Box
                      key={hour}
                      sx={{
                        height: 100,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                      }}
                    />
                  ))}
                  {getSubEventsForRole(role.id, role.name).map((subEvent) => {
                    if (!subEvent.startTime || !subEvent.endTime) {
                      return null;
                    }
                    const top = getTimeBlockPosition(
                      subEvent.startTime,
                      startHour,
                    );
                    const height = getTimeBlockHeight(
                      subEvent.startTime,
                      subEvent.endTime,
                    );
                    return (
                      <EventBox
                        key={`${subEvent.name}-${role.id}`}
                        top={top}
                        height={height}
                        isSubEvent={true}
                        elevation={2}
                      >
                        <Typography variant="caption">
                          {subEvent.name}
                        </Typography>
                        <Typography variant="caption">
                          {formatTime(subEvent.startTime)} -{' '}
                          {formatTime(subEvent.endTime)}
                        </Typography>
                        {subEvent.description && (
                          <Typography
                            variant="caption"
                            sx={{ mt: 0.5, opacity: 0.7 }}
                          >
                            {subEvent.description}
                          </Typography>
                        )}
                      </EventBox>
                    );
                  })}
                  {getEventsForRole(role.id, role.name).map((event) => {
                    const top = getTimeBlockPosition(
                      event.startTime,
                      startHour,
                    );
                    const height = getTimeBlockHeight(
                      event.startTime,
                      event.endTime,
                    );

                    return (
                      <EventBox
                        key={`${event.name}-${role.id}`}
                        top={top}
                        height={height}
                        isSubEvent={false}
                        elevation={2}
                      >
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {event.name}
                        </Typography>
                        <Typography variant="caption">
                          {formatTime(event.startTime)} -{' '}
                          {formatTime(event.endTime)}
                        </Typography>
                        {event.description && (
                          <Typography
                            variant="caption"
                            sx={{ mt: 0.5, opacity: 0.7 }}
                          >
                            {event.description}
                          </Typography>
                        )}
                      </EventBox>
                    );
                  })}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
