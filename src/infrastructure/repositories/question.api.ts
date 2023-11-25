import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class QuestionApi implements QuestionRepository {
  
  async get(category: string): Promise<Question[]> {
    // should query questions by category on backend
    const todos = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());
    console.log(todos);

    return [
      { question: "question example 1 ?", likesCounter: 147612, category },
      { question: "question example 2 ?", likesCounter: 1349, category  },
      { question: "question example 3 ?", likesCounter: 10, category  }
    ];
  }
}