import { Question } from "domain/entities/question.entity";

export interface QuestionRepository {
  get(category: string): Promise<Question[]>;
  like(questionId: string, userId: string): Promise<Question>;
  save(questionId: string, userId: string): Promise<Question>;
  getMyQuestions(userId: string): Promise<Question[]>;
  delete(questionId: string, userId: string): Promise<Question>;
}