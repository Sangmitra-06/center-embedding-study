// You can manually add your sentences and questions here
export const studyData = [
  {
    complexityLevel: 4,
    sentenceId: "sentence_2_complexity_4",
    sentence: "The police officer that the teacher that the mailman that the nurse that the photographer handcuffed photographed bandaged delivered mail to lectured.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "mailman",
        question: "What did the mailman do?",
        correctAnswer: "bandage the teacher"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "mailman",
        question: "Who photographed the mailman?",
        correctAnswer: "the nurse"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "mailman",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "5"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "mailman",
        question: "What did the entity that was photographed do?",
        correctAnswer: "bandaged the teacher"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "mailman",
        question: "What series of events led to the mailman's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the photographer handcuffing the nurse which led to the nurse photographing the mailman"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "mailman",
        question: "What is the consequence of the mailman's involvement? If the involvement does not result in any additional effects, respond with 'none'.",
        correctAnswer: "the teacher delivered mail to the police officer"
      }
    ]
  }
];