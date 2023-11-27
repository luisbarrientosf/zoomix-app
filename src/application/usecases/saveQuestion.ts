import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class SaveQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async run(questionId: string, userId: string): Promise<Question> {
    return await this.questionRepository.save(questionId, userId);
  }
}