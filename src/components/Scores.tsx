import type { AccumScores } from '../types';
import './Scores.css';

interface ScoresProps {
  scores: AccumScores;
}

const houseNames = [
  { key: 'g', name: 'Gryffindor', className: 'gryffindor' },
  { key: 'r', name: 'Ravenclaw', className: 'ravenclaw' },
  { key: 'h', name: 'Hufflepuff', className: 'hufflepuff' },
  { key: 's', name: 'Slytherin', className: 'slytherin' },
] as const;

function Scores({ scores }: ScoresProps) {
  // Encuentra la casa con mayor puntuación
  const winner = houseNames.reduce((max, house) =>
    scores[house.key] > scores[max.key] ? house : max, houseNames[0]
  );

  return (
    <div className="chat-bubble question-bubble">
      <div className="question-title">¡Fin! Tus puntuaciones:</div>
      <div className="answers-row">
        {houseNames.map(house => (
          <div
            key={house.key}
            className={`answer-bubble house-bubble ${house.className}`}
          >
            {house.name}: {scores[house.key]}
          </div>
        ))}
      </div>
      <div className={`winner-msg ${winner.className}`}>
        <strong>¡Tu casa es {winner.name}!</strong>
      </div>
    </div>
  );
}

export default Scores;