// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 1,
    sentenceId: "sentence_2_complexity_1",
    sentence: "The horse that the elephant neighed at trumpeted.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "horse",
        question: "What did the horse do?",
        correctAnswer: "trumpet"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "horse",
        question: "What neighed at the horse?",
        correctAnswer: "the elephant"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "horse",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "2"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "horse",
        question: "What did the entity that was neighed at do?",
        correctAnswer: "trumpeted"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "horse",
        question: "What series of events led to the horse's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the elephant neighing at the horse"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "horse",
        question: "What is the consequence of the horse's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "none"
      }
    ]
  }
];