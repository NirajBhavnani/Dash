// Sidebar component
export const sidebarLinks = [
  {
    imgURL: "/icons/Home.svg",
    route: "/",
    label: "Home",
  },

  {
    imgURL: "/icons/upcoming.svg",
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    imgURL: "/icons/previous.svg",
    route: "/previous",
    label: "Previous",
  },
  {
    imgURL: "/icons/Video.svg",
    route: "/recordings",
    label: "Recordings",
  },
  {
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];

// MeetingTypeList component
export type MeetingState =
  | "isScheduleMeeting"
  | "isJoiningMeeting"
  | "isInstantMeeting"
  | undefined;

interface HomeCardData {
  img: string;
  title: string;
  description: string;
  color: string;
  handleClickState: MeetingState;
}

export const homeCardsData: HomeCardData[] = [
  {
    img: "/icons/add-meeting.svg",
    title: "New Meeting",
    description: "Start an instant meeting",
    color: "bg-orange-1",
    handleClickState: "isInstantMeeting" as MeetingState,
  },
  {
    img: "/icons/join-meeting.svg",
    title: "Join Meeting",
    description: "via invitation link",
    color: "bg-blue-1",
    handleClickState: "isJoiningMeeting" as MeetingState,
  },
  {
    img: "/icons/schedule.svg",
    title: "Schedule Meeting",
    description: "Plan your meeting",
    color: "bg-purple-1",
    handleClickState: "isScheduleMeeting" as MeetingState,
  },
  {
    img: "/icons/recordings.svg",
    title: "View Recordings",
    description: "Meeting Recordings",
    color: "bg-yellow-1",
    handleClickState: undefined as MeetingState,
  },
];
