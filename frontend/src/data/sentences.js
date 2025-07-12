// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 1,
    sentenceId: "sentence_1_complexity_1",
    sentence: "The tuna that the shark attacked swam away.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "tuna",
        question: "What did the tuna do?",
        correctAnswer: "swim away"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "tuna",
        question: "What attacked the tuna? Please just specify the entity.",
        correctAnswer: "the shark"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "tuna",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "2"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "tuna",
        question: "What did the entity that was attacked do? Please specify the verb and the object if both exist.",
        correctAnswer: "swam away"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "tuna",
        question: "What series of events led to the tuna's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the shark attacking the tuna"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "tuna",
        question: "What is the consequence of the tuna's involvement? If the involvement does not result in any additional action chains, respond with 'the action sequence completes'.",
        correctAnswer: "the action sequence completes"
      }
    ]
  }
];