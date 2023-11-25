import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class GetQuestionList {
  constructor(private questionRepository: QuestionRepository) {}

 

  async run(category: string): Promise<Question[]> {
    return await this.questionRepository.get(category);
  }
}