// DATA TYPES

export type ScheduleTag = {
  label: string;
  url?: string; // Optional clickable URL for the tag
};


// Represents a single event in the schedule
export type ScheduleEvent = {
  time: string; // Start time, e.g., "09:00"
  endTime?: string; // Optional end time, e.g., "11:00"
  datetime?: string; // ISO datetime string for HTML
  title: string;
  location?: string;
  speakers?: string;
  tags?: (string | ScheduleTag)[]; // Array of tags (can be simple strings or objects with URLs)
  description?: string; // Detailed description (supports markdown-style links)
};

// Represents a single day in the schedule
export type ScheduleDay = {
  dateLabel: string; // e.g., "Friday, Oct 24"
  isoDate?: string; // ISO date string, e.g., "2025-10-24"
  events: ScheduleEvent[]; // Array of events for this day
};

// SCHEDULE DATA

/**
 * Main schedule data structure
 * Days and events render in the order listed below
 *
 * To modify:
 * - Add/remove days by adding/removing objects in the array
 * - Add/remove events by modifying the `events` array for each day
 * - Tags can be strings or objects: "Tag" or { label: "Tag", url: "https://..." }
 * - Descriptions support markdown links: [text](url)
 */
export const schedule: ScheduleDay[] = [
  {
    dateLabel: "Friday, Feb 27",
    isoDate: "2026-02-27",
    events: [
      {
        time: "17:30",
        datetime: "2026-02-27T17:30",
        title: "Check-in",
        location: "Auditorium Lobby",
        description:
          "Pick up your badges, swag, and get settled in.",
      },
      {
        time: "19:00",
        datetime: "2026-02-27T19:00",
        title: "Opening Ceremony",
        speakers: "Organizing Team",
        location: "Auditorium",
        description: "Event kickoff, logistics, challenges, and rules.",
      },
      {
        time: "19:00",
        datetime: "2026-02-27T19:00",
        title: "Dinner",
        location: "Floor 1",
      },
    ],
  },
  {
    dateLabel: "Saturday, Feb 28",
    isoDate: "2026-02-28",
    events: [
      {
        time: "09:00",
        datetime: "2026-02-28T09:00",
        title: "Breakfast",
        location: "Floor 1",
      },
      {
        time: "11:00",
        datetime: "2026-02-28T11:00",
        endTime: "18:00",
        title: "Showers",
        location: "Elviña Sports Complex",
        description:
          "Freshen up during the day at the Elviña Sports Complex, located Directly in front of the venue.",
      },
      {
        time: "14:00",
        datetime: "2026-02-28T14:00",
        title: "Lunch",
        location: "Floor 1",
      },
      {
        time: "21:00",
        datetime: "2026-02-28T21:00",
        title: "Dinner",
        location: "Floor 1",
      },
    ],
  },
  {
    dateLabel: "Sunday, Mar 1",
    isoDate: "2026-03-01",
    events: [
      {
        time: "09:00",
        datetime: "2026-03-01T09:00",
        title: "Breakfast",
        location: "Cafeteria",
      },
      {
        time: "09:00",
        datetime: "2026-03-01T09:00",
        title: "Project Submission Deadline",
        description: "Submit projects on Devpost.",
      },
            {
        time: "10:00",
        datetime: "2026-02-28T10:00",
        endTime: "12:00",
        title: "Showers",
        location: "Elviña Sports Complex",
        description:
          "Freshen up during the day at the Elviña Sports Complex, located Directly in front of the venue.",
      },
      {
        time: "10:00",
        datetime: "2026-03-01T10:00",
        title: "Demos & Judging",
        location: "Classrooms",
        description: "Demo your projects to judges in assigned rooms.",
      },
      {
        time: "13:40",
        datetime: "2026-03-01T13:40",
        title: "Lunch",
        location: "Floor 1",
      },
      {
        time: "16:00",
        datetime: "2026-03-01T16:00",
        title: "Awards Ceremony",
        location: "Auditorium",
        description: "Event highlights and awards.",
      },
    ],
  },
];
