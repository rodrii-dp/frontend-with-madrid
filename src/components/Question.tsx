import type { QuestionType, ScoreType } from '../types';
import Answer from './Answer';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (scores: ScoreType) => void;
}

function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="chat-bubble question-bubble">
      <div className="question-title">{question.title}</div>
      <div className="answers-row">
        {question.answers.map((answer, idx) => (
          <Answer
            key={idx}
            title={answer.title}
            scores={answer.scores}
            onClick={onAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;