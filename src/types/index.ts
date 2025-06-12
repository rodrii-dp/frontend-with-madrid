export interface ScoreType {
  g: number;
  r: number;
  h: number;
  s: number;
}

export interface AnswerType {
  title: string;
  scores: ScoreType;
}

export interface QuestionType {
  title: string;
  answers: AnswerType[];
}

export type QuestionsData = QuestionType[];

export interface AccumScores {
  g: number;
  r: number;
  h: number;
  s: number;
}