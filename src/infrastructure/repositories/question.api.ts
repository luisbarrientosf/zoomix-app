import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class QuestionApi implements QuestionRepository {
  async get(): Promise<Question[]> {
    return [
      { question: "question example 1 ?" },
      { question: "question example 2 ?" },
      { question: "question example 3 ?" }
    ];
  }
}