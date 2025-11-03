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
      /*{
        time: "09:00",
        endTime: "10:00",
        datetime: "2026-02-27T09:00",
        title: "Check-in",
        tags: ["Welcome", "Multiple tags possible 🗿"],
        location: "Lobby",
        description:
          "Pick up your badge, meet the team, and grab some coffee and snacks.",
      },
      {
        time: "10:00",
        tags: ["12:00"],
        datetime: "2026-02-27T10:00",
        title: "Opening Ceremony",
        speakers: "Organizing Team",
        location: "Main Stage",
        description: "Event kickoff, logistics and rules.",
      },
      {
        time: "11:00",
        datetime: "2026-02-27T11:00",
        title: "Hacking Starts",
        tags: ["48h"],
        location: "Everywhere",
        description:
          "Form teams, pick a challenge, and start building! Mentors available.",
      },
      {
        time: "13:30",
        datetime: "2026-02-27T13:30",
        title: "Lunch",
        location: "Cafeteria",
        description: "Vegetarian and gluten-free options provided.",
      },
      */
    ],
  },
  {
    dateLabel: "Saturday, Feb 28",
    isoDate: "2026-02-28",
    events: [
      /*
      {
        time: "09:30",
        endTime: "10:30",
        datetime: "2026-02-28T09:30",
        title: "Breakfast",
        location: "Cafeteria",
      },
      {
        time: "12:30",
        endTime: "15:30",
        datetime: "2026-02-28T12:30",
        title: "Tech Talk: Shipping Fast",
        tags: [
          "Workshop",
          { label: "Empresa S.A.", url: "https://forms.example.com" },
        ],
        speakers: "Jane Doe",
        location: "Main Stage",
        description:
          "How to move from [prototype](https://www.example.com) to production with confidence.",
      },
      {
        time: "20:00",
        datetime: "2026-02-28T20:00",
        title: "Dinner & Social",
        location: "Cafeteria → Lounge",
      },
      */
    ],
  },
  {
    dateLabel: "Sunday, Mar 1",
    isoDate: "2026-03-01",
    events: [
      /*
      {
        time: "09:00",
        datetime: "2026-03-01T09:00",
        title: "Breakfast",
        location: "Cafeteria",
      },
      {
        time: "11:00",
        datetime: "2026-03-01T11:00",
        title: "Hacking Ends",
        description: "Code Freeze — Submit projects on Devpost",
      },
      {
        time: "12:00",
        datetime: "2026-03-01T12:00",
        title: "Demos & Judging",
        location: "Main Stage",
        description: "3-minute pitches",
      },
      {
        time: "14:00",
        datetime: "2026-03-01T14:00",
        title: "Awards & Closing",
        location: "Main Stage",
      },
      */
    ],
  },
];
