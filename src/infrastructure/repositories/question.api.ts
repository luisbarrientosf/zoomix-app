import { Question } from "domain/entities/question.entity";
import { QuestionRepository } from "domain/repositories/question.repository";
import { wait } from "../../infrastructure/utils";

export class QuestionApi implements QuestionRepository {
  async get(category: string): Promise<Question[]> {
    // TODO: query questions by category on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());

    return [
      { id: "1", question: "question example 1 ?", likesCounter: 147612, category, isLiked: false, isSaved: false },
      { id: "2", question: "question example 2 ?", likesCounter: 1349, category, isLiked: false, isSaved: false },
      { id: "3", question: "question example 3 ?", likesCounter: 10, category, isLiked: false, isSaved: false }
    ];
  }

  async like(questionId: string, userId: string): Promise<Question> {
    // TODO: like questions on backend
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
    // TODO: save questions on backend
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

  async getMyQuestions(userId: string): Promise<Question[]> {
    // TODO: query my questions on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());
    await wait(5000);

    return [
      { id: "1", question: "question example 1 ?", likesCounter: 147612, category: "personal", isLiked: false, isSaved: false },
      { id: "2", question: "question example 2 ?", likesCounter: 1349, category: "personal", isLiked: false, isSaved: false },
      { id: "3", question: "question example 3 ?", likesCounter: 10, category: "personal", isLiked: false, isSaved: false },
      { id: "4", question: "question example 4 ?", likesCounter: 10, category: "personal", isLiked: false, isSaved: false },
      { id: "5", question: "question example 5 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "6", question: "question example 6 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "7", question: "question example 7 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "8", question: "question example 8 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "9", question: "question example 9 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "10", question: "question example 10 ?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "11", question: "question example 611?", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
      { id: "12", question: "question example 6 12", likesCounter: 10, category: "+18", isLiked: false, isSaved: false },
    ];
  }

  async delete(questionId: string, userId: string): Promise<Question> {
    // TODO: delete questions on backend
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json());
      
    return { 
      id: questionId,
      question: "deleted",
      likesCounter: 147612,
      category: "",
      isLiked: true,
      isSaved: false
    };
  }
}