// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 3,
    sentenceId: "sentence_1_complexity_3",
    sentence: "The paper that the writer that the editor that the publisher hired supervised edited was published.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "writer",
        question: "What did the writer do?",
        correctAnswer: "edited the paper"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "writer",
        question: "Who supervised the writer? Please just specify the entity.",
        correctAnswer: "the editor"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "writer",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "4"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "writer",
        question: "What did the entity that was supervised do? Please specify the verb and the object if both exist.",
        correctAnswer: "edited the paper"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "writer",
        question: "What series of events led to the writer's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the publisher hiring the editor which led to the editor supervising the writer"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "writer",
        question: "What is the consequence of the writer's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the paper was published"
      }
    ]
  }

];