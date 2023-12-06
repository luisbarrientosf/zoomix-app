import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class GetMyQuestions {
  constructor(private questionRepository: QuestionRepository) {}

  async run(userId: string): Promise<Question[]> {
    return await this.questionRepository.getMyQuestions(userId);
  }
}