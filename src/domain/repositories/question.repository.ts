import { Question } from "domain/entities/question.entity";

export interface QuestionRepository {
  get(): Promise<Question[]>;
}