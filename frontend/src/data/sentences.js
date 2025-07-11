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
        question: "What is the consequence of the tuna's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the action sequence completes"
      }
    ]
  },
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
        question: "What is the consequence of the car's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the bicycle fell over"
      }
    ]
  },
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
        question: "What is the consequence of the writer's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the paper was published"
      }
    ]
  },
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
        question: "What is the consequence of the eagle's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the heron dropped the fish"
      }
    ]
  },
  {
    complexityLevel: 5,
    sentenceId: "sentence_1_complexity_5",
    sentence: "The goldfish that the cat that the toddler that the babysitter that the mother that the grandmother comforted supervised chased saw swam.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "toddler",
        question: "What did the toddler do?",
        correctAnswer: "chase the cat"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "toddler",
        question: "Who supervised the toddler? Please just specify the entity.",
        correctAnswer: "the babysitter"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "toddler",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "6"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "toddler",
        question: "What did the entity that was supervised do? Please specify the verb and the object if both exist.",
        correctAnswer: "chased the cat"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "toddler",
        question: "What series of events led to the toddler's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the grandmother comforting the mother which led to the mother supervising the babysitter which led to the babysitter supervising the toddler"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "toddler",
        question: "What is the consequence of the toddler's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the cat saw the goldfish"
      }
    ]
  },
  {
    complexityLevel: 6,
    sentenceId: "sentence_1_complexity_6",
    sentence: "The crab that the octopus that the seal that the shark that the whale that the diver that the boat captain guided observed swimming past startled brushed touched hid.",
    questions: [
      {
        id: 1,
        type: "action_performed",
        difficulty: "easy",
        entity: "seal",
        question: "What did the seal do?",
        correctAnswer: "brushed the octopus"
      },
      {
        id: 2,
        type: "agent_identification",
        difficulty: "easy",
        entity: "seal",
        question: "What startled the seal? Please just specify the entity.",
        correctAnswer: "the shark"
      },
      {
        id: 3,
        type: "entity_count",
        difficulty: "medium",
        entity: "seal",
        question: "How many distinct entities are in the sentence?",
        correctAnswer: "7"
      },
      {
        id: 4,
        type: "nested_dependency",
        difficulty: "medium",
        entity: "seal",
        question: "What did the entity that was startled do? Please specify the verb and the object if both exist.",
        correctAnswer: "brushed the octopus"
      },
      {
        id: 5,
        type: "causal_sequence",
        difficulty: "hard",
        entity: "seal",
        question: "What series of events led to the seal's action? If no events exist, please answer with no prior events.",
        correctAnswer: "the boat captain guiding the diver which led to the diver observing the whale which led to the whale swimming past the shark which led to the shark startling the seal"
      },
      {
        id: 6,
        type: "chain_consequence",
        difficulty: "hard",
        entity: "seal",
        question: "What is the consequence of the seal's involvement? If no consequence exists, please answer with the action sequence completes.",
        correctAnswer: "the octopus touched the crab"
      }
    ]
  }
];