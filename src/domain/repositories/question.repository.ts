import { Question } from "domain/entities/question.entity";

export interface QuestionRepository {
  get(category: string): Promise<Question[]>;
}