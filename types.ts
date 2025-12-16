export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; // In a real app, this would be markdown or HTML
  commentCount: number;
}