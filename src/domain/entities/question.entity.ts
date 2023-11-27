export interface Question {
  id: string;
  question: string;
  category: string;
  isLiked: boolean;
  isSaved: boolean;
  likesCounter: number;
}