import React, { useState } from 'react';

const questions = [
  { id: 1, text: 'What is your height?', placeholder: 'e.g., 180 cm' },
  { id: 2, text: 'What is your weight?', placeholder: 'e.g., 75 kg' },
  { id: 3, text: 'What is your chest circumference?', placeholder: 'e.g., 100 cm' },
  { id: 4, text: 'What is your waist circumference?', placeholder: 'e.g., 85 cm' },
  { id: 5, text: 'How do you prefer the fit?', placeholder: 'e.g., slim, regular, loose' },
];

function FitQuiz() {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quiz submitted:', answers);
    alert('Thank you! Your fit profile has been saved.');
  };

  return (
    <div className="grid-container">
      <h2 className="text-center">Fit Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map(q => (
          <label key={q.id} className="grid-x grid-margin-x align-middle">
            <div className="cell small-12 medium-6">
              <p>{q.text}</p>
              <input
                type="text"
                className="input-group-field"
                placeholder={q.placeholder}
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            </div>
          </label>
        ))}
        <button type="submit" className="button primary expanded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FitQuiz;
