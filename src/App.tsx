import { useFetch } from './hooks/useFetch';
import QuestionList from './components/QuestionList';
import type { QuestionType } from './types';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('/data.json');

  if (loading) return <div className="chat-container"><div className="loading-msg">Cargando...</div></div>;
  if (error) return <div className="chat-container"><div className="error-msg">Error: {error}</div></div>;

  return (
    <div className="app-container">
      <h1 className="app-title">The Sorting Hat</h1>
      <h3 className="app-subtitle">Answers will be shown at the end.</h3>
      <QuestionList questions={data as QuestionType[]} />
    </div>
  );
}

export default App;