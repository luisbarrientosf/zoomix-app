import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";

export class QuestionApi implements QuestionRepository {
  
  async get(category: string): Promise<Question[]> {
    // should query questions by category on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());
    

    return [
      { id: "1", question: "question example 1 ?", likesCounter: 147612, category, isLiked: false, isSaved: false },
      { id: "2", question: "question example 2 ?", likesCounter: 1349, category, isLiked: false, isSaved: false },
      { id: "3", question: "question example 3 ?", likesCounter: 10, category, isLiked: false, isSaved: false }
    ];
  }

  async like(questionId: string, userId: string): Promise<Question> {
    // should like questions on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());

    return { 
      id: questionId,
      question: "Liked",
      likesCounter: 147612,
      category: "",
      isLiked: true,
      isSaved: false
    };
  }

  async save(questionId: string, userId: string): Promise<Question> {
    // should save questions on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());
    
    return {
      id: questionId,
      question: "question example 1 ?",
      likesCounter: 147612,
      category: "",
      isLiked: false,
      isSaved: true
    };
  }
}