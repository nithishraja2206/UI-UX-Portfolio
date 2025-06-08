export interface ProjectInfoData {
  id: number;
  slug: string;
  name: string[];
  role: string;
  timeline: string;
  tldr: string;
  context: string[];
  problem: {
    summary: string;
    issues: string[];
    impacts: string[];
    challenge: string;
  };
  objectives: string[];
  research: {
    foundations: string[];
    insight: string;
  };
  design: {
    overview: string;
    details: {
      image: string;
      description: string;
    }[];
  };
  core_features: {
    image: string;
    title: string;
    items: string[];
  }[];
  testing: {
    scenario: string;
    tasks: string[];
    feedback: {
      ease_of_use_score: string;
      quotes: string[];
    };
  };

  reflection: {
    summary: string;
    learnings: string[];
  };
}

export const detailedProjectInfo: ProjectInfoData[] = [
  {
    id: 1,
    slug: "senseboard",
    name: ["SenseBoard", " A Sensory OS for Creative Teams"],
    role: "Founder, Product Designer & UX Strategist",
    timeline: "Sept 2023 – Present",
    tldr: "A sensory-first design system that helps creative teams map ideas, moods, and inspiration using visual, auditory, and emotional cues. Designed, built, and prototyped the entire product experience from scratch — including interaction models, flow logic, and interface design. Resulted in a functional prototype used in 3 real projects with strong feedback: “More expressive than Notion or Miro.” “Feels like Figma for moods.”",
    context: [
      "Creative thinking doesn't start with timelines. It starts with emotion, mood, and inspiration. Yet most digital tools — like Notion, Trello, or Miro — prioritize structure over spontaneity. They organize tasks, but they ignore the creative spark.",
      " That’s where SenseBoard comes in. I envisioned a spatial, sensory-first canvas where designers, researchers, and creators could think in emotions, not just execution. A system built on sound, color, motion, and vibe.",
    ],
    problem: {
      summary:
        "Traditional productivity tools are too linear, emotionally neutral, and poor at visualizing creative evolution.",
      issues: [
        "Too linear for non-linear ideation",
        "Emotionally neutral — no way to express 'vibes'",
        "Poor at visualizing creative evolution (e.g., 'How did we get here?')",
      ],
      impacts: [
        "Teams lose emotional intent behind product direction",
        "Strategy becomes disconnected from creative mood",
        "There's no unified flow from inspiration → idea → product vibe",
      ],
      challenge:
        "How might we design a system where teams can think and align emotionally — before structurally?",
    },
    objectives: [
      "A sensory-first canvas that captures moods, inspiration, and emotion trails",
      "A shared space for teams to align on the feeling behind ideas",
      "A system for mapping abstract thinking using sound, visuals, and interactions",
      "A UX that removes friction between creative input and conceptual clarity",
    ],
    research: {
      foundations: [
        "Observed creative workflows at startups, agencies, and UX teams",
        "Personal experience running mood-first ideation workshops",
        "Researched affective memory theory — how sound, color, and emotion drive decision recall",
      ],
      insight:
        "Designers don’t just think — they feel, and they need tools that reflect that internal process.",
    },
    design: {
      overview:
        "Designed the entire product — from system architecture to wireframes, interaction logic, and UI polish.",
      details: [
        {
          image: require(".//../../public/SenseBoard1.png"),
          description:
            "Replace traditional “goal labels” with mood tags like: Calm, Energetic, Focused. Each project has a mood history tracker to show emotional evolution over time.Team alignment visual: a “Mood Aura” bubble that reflects collective creative sentiment.",
        },
        {
          image: require(".//../../public/SenseBoard1.png"),
          description:
            "Replace traditional “goal labels” with mood tags like: Calm, Energetic, Focused. Each project has a mood history tracker to show emotional evolution over time.Team alignment visual: a “Mood Aura” bubble that reflects collective creative sentiment.",
        },
      ],
    },
    core_features: [
      {
        image: require(".//../../public/SenseBoard1.png"),
        title: "Mood Mapping",
        items: [
          "Mood tags like Calm, Energetic, Focused instead of goal labels",
          "Mood history tracker for emotional evolution over time",
          "Team alignment visual: 'Mood Aura' bubble",
        ],
      },
      {
        image: require(".//../../public/SenseBoard1.png"),
        title: "Sensory Boards",
        items: [
          "Visuals / gradients",
          "Ambient sound clips",
          "Sketches / notes",
          "Thought prompts",
          "Connected by emotional flow lines instead of categories",
        ],
      },
      {
        image: require(".//../../public/SenseBoard1.png"),
        title: "Flow Mapping Canvas",
        items: [
          "Visualizes mood transitions like Calm → Focused → Chaotic",
          "Shows inspiration arcs, divergence points, conceptual clusters",
          "AI suggestions for connections and mood paths",
        ],
      },
      {
        image: require(".//../../public/SenseBoard1.png"),
        title: "Interaction Patterns + Sound Layers",
        items: [
          "Custom gesture library (e.g., 'swipe to calm', 'tap to pivot')",
          "Ambient sound adjusts dynamically while exploring",
          "Designed for fluid, low-friction thinking",
        ],
      },
    ],
    testing: {
      scenario: "Creative team maps out mood and intent for a wellness product",
      tasks: [
        "Create a sensory board using mood filters",
        "Link sketches, sounds, and notes",
        "Use flow map to visualize project mood evolution",
      ],
      feedback: {
        ease_of_use_score: "8.2/10",
        quotes: [
          "The breathing animation + sound combo helped me center my thinking.",
          "It made the design review feel like a story — not just tasks.",
          "Most expressive design tool I’ve touched since Figma.",
        ],
      },
    },

    reflection: {
      summary:
        "SenseBoard wasn't just a tool — it was a rethinking of how teams emotionally align during ideation.",
      learnings: [
        "Emotion is not fluff — it's the invisible architecture behind great products",
        "Spatial thinking is essential for early ideation",
        "Teams thrive when they align on feeling, not just structure",
      ],
    },
  },
];
