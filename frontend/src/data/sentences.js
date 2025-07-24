// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 3,
    sentenceId: "sentence_2_complexity_3",
    sentence: "The skunk that the lion that the bat that the elephant sprayed at trumpeted at echolocated roared.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "lion",
        question: "What did the lion do?",
        correctAnswer: "echolocate the skunk"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "lion",
        question: "What trumpeted at the lion?",
        correctAnswer: "the bat"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "lion",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "4"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "lion",
        question: "What did the entity that was trumpeted at do?",
        correctAnswer: "echolocated the skunk"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "lion",
        question: "What series of events led to the lion's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the elephant spraying at the bat which led to the bat trumpeting at the lion"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "lion",
        question: "What is the consequence of the lion's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the skunk roared"
      }
    ]
  }
];