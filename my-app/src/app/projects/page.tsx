"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/entities/Project";
import { Search, Filter, Star, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/projects/ProjectsCard";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  category: string;
  [key: string]: any; // fallback for other fields
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
 
  const categories = [
    { id: "all", label: "All Projects", emoji: "🌟", color: "blue" },
    { id: "animals", label: "Animals", emoji: "🐾", color: "green" },
    { id: "environment", label: "Environment", emoji: "🌱", color: "emerald" },
    { id: "education", label: "Education", emoji: "📚", color: "purple" },
    { id: "community", label: "Community", emoji: "🏘️", color: "orange" },
    { id: "health", label: "Health", emoji: "💚", color: "pink" },
  ];

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === activeCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, activeCategory]);

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      //@ts-ignore
      const projectList = await Project.list();
      setProjects(projectList);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
    setIsLoading(false);
  };

  const handleDonate = (project: ProjectType) => {
    alert(`Thanks for wanting to help with "${project.title}"! 🎉`);
  };

  const handleShare = (project: ProjectType) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied! Share it with your friends! 🔗");
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing Projects to Support! 🌟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a project that makes your heart happy and help make the world
            better! ✨
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for awesome projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-blue-200 focus:border-blue-400 bg-white bubble-shadow"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 bounce-hover bubble-shadow ${
                  activeCategory === category.id
                    ? `bg-${category.color}-500 text-white`
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 bubble-shadow animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-3">
                    <div className="h-12 bg-gray-200 rounded-full flex-1"></div>
                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No projects found!
            </h3>
            <p className="text-gray-500">
              Try a different search or category. 🤗
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDonate={handleDonate}
                onShare={handleShare}
              />
            ))}
          </div>
        )}

        {/* Fun Encouragement Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 rounded-3xl p-8 bubble-shadow">
            <div className="flex justify-center space-x-4 mb-4">
              <Heart
                className="w-8 h-8 text-red-400 float-animation"
                fill="currentColor"
              />
              <Star
                className="w-8 h-8 text-yellow-400 float-animation"
                fill="currentColor"
                style={{ animationDelay: "0.5s" }}
              />
              <Heart
                className="w-8 h-8 text-pink-400 float-animation"
                fill="currentColor"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Every donation makes a difference! 🌟
            </h3>
            <p className="text-gray-600">
              Even $1 can help change someone's life. You're already a hero! 🦸‍♀️🦸‍♂️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
