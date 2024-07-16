// src/Quiz.js
import React, { useState } from 'react';
import './Quiz.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const questions = [
  {
    question: "Is marriage between a man and a woman ordained of God?",
    correctAnswer: "Yes",
  },
  {
    question: "Is the family central to the Creator’s plan?",
    correctAnswer: "Yes",
  },
  {
    question: "Is gender an essential characteristic of individual identity?",
    correctAnswer: "Yes",
  },
  {
    question: "Should the sacred powers of procreation be employed outside marriage?",
    correctAnswer: "No",
  },
  {
    question: "Are mothers primarily responsible for the nurture of their children?",
    correctAnswer: "Yes",
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleToggle = (index) => {
    const newAnswers = [...answers];
    newAnswers[index] = newAnswers[index] === "Yes" ? "No" : "Yes";
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <Container className="quiz-container">
      <h1 className="text-center mb-4">The Family: A Proclamation to the World Quiz</h1>
      {questions.map((q, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={8}>
                <Card.Text>{q.question}</Card.Text>
              </Col>
              <Col md={2}>
                <Button variant={answers[index] === "Yes" ? "success" : "secondary"} onClick={() => handleToggle(index)}>
                  {answers[index] === null ? "Choose" : answers[index]}
                </Button>
              </Col>
              <Col md={2}>
                {showResults && (
                  <span className={answers[index] === q.correctAnswer ? "text-success" : "text-danger"}>
                    {answers[index] === q.correctAnswer ? "Correct" : "Incorrect"}
                  </span>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      <div className="text-center">
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </Container>
  );
};

export default Quiz;
