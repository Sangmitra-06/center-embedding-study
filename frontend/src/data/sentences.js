// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 4,
    sentenceId: "sentence_1_complexity_4",
    sentence: "The fish that the heron that the eagle that the hiker that the guide led spotted caught dropped escaped.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "eagle",
        question: "What did the eagle do?",
        correctAnswer: "catch the heron"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "eagle",
        question: "Who spotted the eagle? Please just specify the entity.",
        correctAnswer: "the hiker"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "eagle",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "5"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "eagle",
        question: "What did the entity that was spotted do? Please specify the verb and the object if both exist.",
        correctAnswer: "caught the heron"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "eagle",
        question: "What series of events led to the eagle's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the guide leading the hiker which led to the hiker spotting the eagle"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "eagle",
        question: "What is the consequence of the eagle's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the heron dropped the fish"
      }
    ]
  }
];