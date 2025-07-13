// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 2,
    sentenceId: "sentence_1_complexity_2",
    sentence: "The bicycle that the car that the truck hit bumped fell over.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "car",
        question: "What did the car do?",
        correctAnswer: "bump the bicycle"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "car",
        question: "What hit the car? Please just specify the entity.",
        correctAnswer: "the truck"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "car",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "3"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "car",
        question: "What did the entity that was hit do? Please specify the verb and the object if both exist.",
        correctAnswer: "bumped the bicycle"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "car",
        question: "What series of events led to the car's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the truck hitting the car"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "car",
        question: "What is the consequence of the car's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the bicycle fell over"
      }
    ]
  }
];