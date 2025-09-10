// types/Project.ts

export interface Project {
    title: string; // Name of the social project
    description: string; // Short, kid-friendly description of the project
    image_url?: string; // Image for the project card
    goal_amount: number; // Target donation amount
    raised_amount?: number; // Amount raised so far (default 0)
    category: "animals" | "environment" | "education" | "community" | "health"; // Project category
    age_group?: "all" | "10-12" | "13-15"; // Recommended age group (default: all)
    difficulty?: "easy" | "medium" | "hard"; // Project difficulty (default: easy)
  }
  