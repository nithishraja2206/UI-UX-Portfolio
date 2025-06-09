import { StaticImageData } from "next/image";
export interface ProjectInfoData {
  id: number;
  slug: string;
  name: string[];
  role: string;
  timeline: string;
  banner: StaticImageData;

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
      title: string;
      image: string;
      description: string;
    }[];
  };
  core_features?: {
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
    timeline: "April 2025 – Present",
    banner: require(".//../../public/SenseBoard1.png"),

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
          title: "Your Projects Overview — A Visual Entry Point",
          image: require(".//../../public/Sense1.png"),
          description:
            " This is the home screen of SenseBoard, showing a grid of existing creative projects. Each card provides quick access with date, title, and a short emotional descriptor — for example, the “Serenity Wellness App” is designed to feel intuitively calming.",
        },
        {
          title: "Project Canvas — Mood Boards for Emotional Alignment",
          image: require(".//../../public/Sense2.png"),
          description:
            " Inside each project, users can create multiple Mood Boards that reflect various aspects of creative intent — from visual language to interaction concepts. The “Calm” mood tag here governs the project's emotional direction and is visible in the top bar.",
        },
        {
          title: "Mood Board Detail — Multisensory Design in Action",
          image: require(".//../../public/Sense3.png"),
          description:
            "  This screen shows a live Mood Board in action. Users can add sketches, sounds, images, or thoughts — each tagged by mood and intensity. A breathing animation helps visualize calmness, while gesture and sound concepts are integrated directly into the creative space.",
        },
      ],
    },
    core_features: [
      {
        image: require(".//../../public/Sense4.png"),
        title: "Mood Mapping",
        items: [
          "Mood tags like Calm, Energetic, Focused instead of goal labels",
          "Mood history tracker for emotional evolution over time",
          "Team alignment visual: 'Mood Aura' bubble",
        ],
      },
      {
        image: require(".//../../public/Sense5.png"),
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
        image: require(".//../../public/Sense6.png"),
        title: "Flow Mapping Canvas",
        items: [
          "Visualizes mood transitions like Calm → Focused → Chaotic",
          "Shows inspiration arcs, divergence points, conceptual clusters",
          "AI suggestions for connections and mood paths",
        ],
      },
      {
        image: require(".//../../public/Sense7.png"),
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
  {
    id: 2,
    slug: "michiganTech",
    name: [
      "MTU Redesign",
      "A Modern UX System for Academic Departments",
    ],
    role: "UX Designer & Prototyping Lead",
    timeline: "Sept 2023 – Oct 2024",
    banner: require(".//../../public/MTU.png"),

    tldr:
      "Redesigned key departmental websites for Michigan Tech to improve usability, SEO, and student engagement. Applied user research, accessibility standards, and iterative prototyping to modernize content structure and interaction flows. Shipped revamped pages for: Alumni & Friends, Visual and Performing Arts, Biological Sciences, and Physics.",

    context: [
      "Michigan Tech’s departmental pages were outdated, inconsistent, and difficult to navigate.",
      "Most lacked clear hierarchy, SEO optimization, and had fragmented content and visual inconsistency across departments.",
      "The challenge was to unify the UX while preserving departmental identity — creating accessible, usable, and engaging sites within the university framework."
    ],

    problem: {
      summary: "Departmental websites suffered from poor navigation, low engagement, and inconsistent design.",
      issues: [
        "Lacked clear content hierarchy and search optimization",
        "Fragmented or duplicated information",
        "Visual identity and branding inconsistency"
      ],
      impacts: [
        "Students couldn't find program-specific info within 3 clicks",
        "Alumni pages had low engagement and lacked emotional storytelling",
        "Departments like Arts and Sciences didn’t reflect their vibrancy or offerings"
      ],
      challenge:
        "How might we redesign departmental sites that are accessible, consistent, and emotionally engaging — while aligning with the university brand?"
    },

    objectives: [
      "Improve usability, readability, and navigation",
      "Establish a modular, scalable design system",
      "Increase emotional connection and user engagement",
      "Ensure WCAG 2.1 compliance and SEO optimization"
    ],

    research: {
      foundations: [
        "User interviews with prospective students, faculty, and alumni",
        "Heatmap and SEO analytics from current pages",
        "Analysis of internal search logs and user paths"
      ],
      insight:
        "Users valued clarity, quick access to programs, and content that reflects departmental culture and achievements."
    },

    design: {
      overview:
        "Built a flexible system with modular templates, accessibility-first design, and department-specific visual styling.",
      details: [
        {
          title: " Alumni & Friends — Story-Driven Engagement Redesign",
          image: require(".//../../public/MTU1.png"),
          description:
            "Streamlined giving experience by simplifying access to the 'Give Now' button and donation-related CTAs across the homepage and event blocks. Elevated emotional engagement through curated alumni stories, visual spotlights, and event photos that center on connection and tradition. Improved action flow with better hierarchy in event listings, 'I Want To' links, and class notes. Result: +27% increase in clickthrough rate for donation-related links post-launch."
        },
        {
          title: "Visual & Performing Arts — A Showcase of Creativity and Connection",
          image: require(".//../../public/MTU2.png"),
          description:
            "Highlighted student creativity through interactive content blocks for Art, Music, Sound, and Theatre.  Embedded visual storytelling with bold full-width stage imagery, quotes, and program snapshots. Introduced “Studio Snapshots” — curated section links that reflect each discipline’s flavor (e.g., Sound → Jazz stage, Theatre → scene rehearsal).  Elevated engagement with quote-driven emotional connection and outcome metrics like job placement and participation stats.  Result: +38% increase in average time on page and measurable boost in program interest and inquiry submissions."
        },
        {
          title: "Biological Sciences & Physics — Clarity for Research and Recruitment",
          image: require(".//../../public/MTU3.png"),
          description:
            "Streamlined program structure, curriculum paths, and research highlights for both departments.  Reorganized faculty profiles with improved bios, specialization tags, and lab affiliation clarity.  Integrated CTAs for graduate program applications, lab assistantships, and research visit scheduling.  Emphasized real-world readiness via student quotes and metrics on grant funding, job placement, and pre-med success. Result: –40% bounce rate and significantly improved mobile readability across pages."
        }
      ]
    },

    testing: {
      scenario: "Departmental redesigns tested with real students and staff to validate clarity, accessibility, and conversion paths",
      tasks: [
        "Navigate to key program pages",
        "Find donation or inquiry links",
        "Use mobile version to explore departmental content"
      ],
      feedback: {
        ease_of_use_score: "8.7/10",
        quotes: [
          "So much easier to find what I’m looking for now.",
          "The new layouts feel consistent but still unique to each department.",
          "Finally feels like a modern, accessible university site."
        ]
      }
    },

    reflection: {
      summary:
        "This project was about designing with empathy — unifying institutional needs with user storytelling.",
      learnings: [
        "Accessibility and SEO go hand-in-hand in academic design",
        "Emotional storytelling improves engagement even in institutional websites",
        "Design systems can balance consistency with creative flexibility"
      ]
    }
  }
];
