import { useState, useRef, useEffect, createRef } from 'react';
import type { AccumScores, QuestionType, ScoreType } from '../types';
import Question from './Question';
import Scores from './Scores';
import './QuestionList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface QuestionListProps {
  questions: QuestionType[];
}

function QuestionList({ questions }: QuestionListProps) {
  const [scores, setScores] = useState<AccumScores>({ g: 0, r: 0, h: 0, s: 0 });
  const [currentIdx, setCurrentIdx] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const nodeRefs = questions.map(() => createRef<HTMLDivElement>());
  const scoresRef = createRef<HTMLDivElement>();


  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [currentIdx]);

  const handleAnswer = (answerScores: ScoreType) => {
    setScores(prev => ({
      g: prev.g + answerScores.g,
      r: prev.r + answerScores.r,
      h: prev.h + answerScores.h,
      s: prev.s + answerScores.s,
    }));
    setCurrentIdx(idx => idx + 1);
  };

  return (
    <div className="chat-container" ref={chatRef}>
      <TransitionGroup>
        {questions.slice(0, currentIdx + 1).map((question, idx) => (
          <CSSTransition
            key={idx}
            timeout={400}
            classNames="fade-bubble"
            nodeRef={nodeRefs[idx]}
          >
            <div ref={nodeRefs[idx]}>
              {idx === currentIdx ? (
                <Question question={question} onAnswer={handleAnswer} />
              ) : (
                <Question question={question} onAnswer={() => {}} />
              )}
            </div>
          </CSSTransition>
        ))}
        {currentIdx >= questions.length && (
          <CSSTransition timeout={400} classNames="fade-bubble" nodeRef={scoresRef}>
            <div ref={scoresRef}>
              <Scores scores={scores} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default QuestionList;