import type { ScoreType } from '../types';

interface AnswerProps {
  title: string;
  scores: ScoreType;
  onClick: (scores: ScoreType) => void;
}

function Answer({ title, scores, onClick }: AnswerProps) {
  return (
    <button className="answer-bubble" onClick={() => onClick(scores)}>
      {title}
    </button>
  );
}

export default Answer;