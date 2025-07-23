// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 2,
    sentenceId: "sentence_2_complexity_2",
    sentence: "The bicycle that the airplane that the train pedaled past whistled at taxied.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "airplane",
        question: "What did the airplane do?",
        correctAnswer: "whistle at the bicycle"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "airplane",
        question: "What pedaled past the airplane?",
        correctAnswer: "the train"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "airplane",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "3"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "airplane",
        question: "What did the entity that was pedaled past do?",
        correctAnswer: "whistled at the bicycle"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "airplane",
        question: "What series of events led to the airplane's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the train pedaling past the airplane"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "airplane",
        question: "What is the consequence of the airplane's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the bicycle taxied"
      }
    ]
  }
];