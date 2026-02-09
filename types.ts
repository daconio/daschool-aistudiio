export interface Hackathon {
  id: number;
  title: string;
  organizer: string;
  tags: string[];
  prize: string;
  participants: number;
  daysLeft: number;
  status: 'recruiting' | 'closed' | 'upcoming';
  imageColor: string;
}

export interface Team {
  id: number;
  name: string;
  leader: string;
  description: string;
  members: number;
  maxMembers: number;
  hackathonName: string;
  status: 'recruiting' | 'closed';
}

export interface Post {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  title: string;
  content: string;
  url?: string;
  image?: string;
  likes: number;
  comments: number;
  views: number;
}

export interface RankUser {
  rank: number;
  name: string;
  xp: number;
  tier: string;
  avatarColor: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  thumbnailColor: string;
  progress?: number;
}

export interface RunningCourse {
  id: number;
  title: string;
  description: string;
  participants: string;
  gradient: string;
}

export interface TrackCourse {
  id: number;
  title: string;
  description: string;
  participants: string;
  season: string;
  type: string;
  color: string;
  tags: string[];
}

export interface LearningCourse {
  id: number;
  title: string;
  description: string;
  subTitle: string;
  participants: string;
  badge: string;
  gradient: string;
  tags: string[];
}

export interface ProjectCourse {
  id: number;
  title: string;
  participants: string;
  imageColor: string;
  tags: string[];
  stages?: string;
  isCertified?: boolean;
  url?: string;
}

export interface VideoCourse {
  id: number;
  title: string;
  participants: string;
  imageColor: string;
  episode: number;
  isCertified?: boolean; // Re-using for uniformity if needed
}

export interface RankerLecture {
  id: number;
  title: string;
  thumbnailText: string;
  instructor: string;
  gradient: string;
  tags: string[];
  avatarId?: number; // to simulate different avatars
}
