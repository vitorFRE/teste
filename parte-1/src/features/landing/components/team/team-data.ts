export const TEAM_ASSETS = {
  frame: "/figma/team/avatar-frame.svg",
  mask: "/figma/team/avatar-mask.svg",
  socialIcon: "/figma/team/social-linkedin.svg",
  divider: "/figma/team/divider-line.svg",
} as const;

export type TeamPhotoCrop = {
  frameLeft: number;
  frameTop: number;
  photoWidth: number;
  photoHeight: number;
  photoLeft: number;
  photoTop: number;
  maskPosition: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  bioExtra?: string;
  photo: string;
  crop: TeamPhotoCrop;
  cardMinHeightClass: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "/figma/team/photo-john.jpg",
    crop: {
      frameLeft: 7.82,
      frameTop: 5,
      photoWidth: 107,
      photoHeight: 161,
      photoLeft: -5,
      photoTop: -14,
      maskPosition: "5px 14px",
    },
    cardMinHeightClass: "min-h-[331px]",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "/figma/team/photo-jane.jpg",
    crop: {
      frameLeft: 5,
      frameTop: 5,
      photoWidth: 188,
      photoHeight: 125,
      photoLeft: -51,
      photoTop: -6,
      maskPosition: "51px 6px",
    },
    cardMinHeightClass: "min-h-[331px]",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "/figma/team/photo-michael.jpg",
    crop: {
      frameLeft: 5,
      frameTop: 5,
      photoWidth: 208,
      photoHeight: 139,
      photoLeft: -84,
      photoTop: 0,
      maskPosition: "84px 0px",
    },
    cardMinHeightClass: "min-h-[331px]",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "/figma/team/photo-emily.jpg",
    crop: {
      frameLeft: 5,
      frameTop: 5,
      photoWidth: 284,
      photoHeight: 426,
      photoLeft: -88,
      photoTop: -158,
      maskPosition: "88px 158px",
    },
    cardMinHeightClass: "min-h-[354px]",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "/figma/team/photo-brian.jpg",
    crop: {
      frameLeft: 5,
      frameTop: 5,
      photoWidth: 165,
      photoHeight: 247,
      photoLeft: -36,
      photoTop: -45,
      maskPosition: "36px 45px",
    },
    cardMinHeightClass: "min-h-[354px]",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing",
    bioExtra:
      "Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "/figma/team/photo-sarah.jpg",
    crop: {
      frameLeft: 5,
      frameTop: 5,
      photoWidth: 105,
      photoHeight: 105,
      photoLeft: -1,
      photoTop: 0,
      maskPosition: "1px 0px",
    },
    cardMinHeightClass: "min-h-[354px]",
  },
];
