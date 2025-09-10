"use client";

import Image from "next/image";
import { Heart, Share2, Star, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import FriendlyButton from "../shared/FriendlyButton";

export default function ProjectCard({ project, onDonate, onShare }: any) {
  const progressPercentage = (project.raised_amount / project.goal_amount) * 100;

  const categoryEmojis: Record<string, string> = {
    animals: "🐾",
    environment: "🌱",
    education: "📚",
    community: "🏘️",
    health: "💚",
  };

  const categoryColors: Record<string, string> = {
    animals: "bg-green-100 text-green-700 border-green-200",
    environment: "bg-emerald-100 text-emerald-700 border-emerald-200",
    education: "bg-purple-100 text-purple-700 border-purple-200",
    community: "bg-orange-100 text-orange-700 border-orange-200",
    health: "bg-pink-100 text-pink-700 border-pink-200",
  };

  const difficultyStars: Record<string, number> = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  return (
    <Card className="bg-white rounded-3xl overflow-hidden bubble-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ">
      {/* Project Image */}
      <div className="relative -top-6">
        <img
          src={
            project.image_url ||
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
          }
          alt={project.title}
          
          className="w-full h-62 object-cover"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold border ${categoryColors[project.category]} bubble-shadow`}
        >
          <span className="mr-1">{categoryEmojis[project.category]}</span>
          {project.category}
        </div>

        {/* Difficulty Stars */}
        <div className="absolute top-4 right-4 flex space-x-1">
          {Array(difficultyStars[project.difficulty])
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
              />
            ))}
        </div>

        {/* Fun Stickers */}
        <div className="absolute -bottom-4 right-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center float-animation bubble-shadow">
            <Gift className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <CardContent className="p-">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Progress: {progressPercentage.toFixed(0)}%
            </span>
            <span className="text-sm font-bold text-blue-600">
              ${project.raised_amount || 0} / ${project.goal_amount}
            </span>
          </div>

          {/* Custom Star Progress Bar */}
          <div className="relative">
            <Progress
              value={progressPercentage}
              className="h-3 bg-gray-200 rounded-full overflow-hidden"
            />
            <div className="absolute -right-1 -top-1">
              {progressPercentage >= 100 ? (
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" fill="currentColor" />
                </div>
              ) : (
                <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white" fill="currentColor" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <div className="flex-1">
            <FriendlyButton
              variant="primary"
              size="medium"
              onClick={() => onDonate(project)}
              fullWidth
              icon={Heart}
            >
              Help Now! 💖
            </FriendlyButton>
          </div>
          <button
    onClick={() => onShare(project)}
    className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center bubble-shadow 
               transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200"
  >
    <Share2 className="w-5 h-5" />
  </button>
        </div>

        {/* Fun Encouragement */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 font-medium">
            {progressPercentage >= 100
              ? "🎉 Goal achieved! Amazing!"
              : "Every dollar helps! ⭐"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
