"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import FriendlyButton from "@/components/shared/FriendlyButton";
import FriendlyInput from "@/components/shared/FriendlyInput";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""          
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration
    console.log("Registration data:", formData);
     // ✅ Form clear karne ke liye reset
  setFormData({
    name: "",
    age: "",
    email: "",
    password: ""
  });
    // Redirect to success page or login
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 float-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 float-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-30 float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-30 float-animation"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
        <Link
  href={"/Landing"}
  className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 
             transform transition-transform duration-300 hover:-translate-y-1"
>
  <ArrowLeft className="w-5 h-5 mr-2" />
  <span className="font-semibold">Back to Home</span>
</Link>


          <div className="w-20 h-20 fun-gradient rounded-full mx-auto mb-6 flex items-center justify-center float-animation bubble-shadow">
            <Sparkles className="w-10 h-10 text-white" fill="currentColor" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Amazing Community! 🎉
          </h1>
          <p className="text-lg text-gray-600">
            Let's get you started on your journey to make a difference!
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl p-8 bubble-shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <FriendlyInput
              icon={User}
              type="text"
              placeholder="What's your awesome name?"
              value={formData.name}
              onChange={(value) => handleInputChange("name", value)}
              color="blue"
              required
            />

            {/* Age Field */}
            <FriendlyInput
              icon={Calendar}
              type="number"
              placeholder="How old are you? (10-15)"
              value={formData.age}
              onChange={(value) => handleInputChange("age", value)}
              color="green"
            
            
              required
            />

           {/* Email Field */}
           <FriendlyInput
  icon={Mail}
  type="email"
  placeholder="Your email address"
  value={formData.email}
  onChange={(value) => handleInputChange("email", value)}
  color="yellow"
  required
  autoComplete="off"   // ✅ autofill disable
/>

<FriendlyInput
  icon={Lock}
  type="password"
  placeholder="Create a super secret password"
  value={formData.password}
  onChange={(value) => handleInputChange("password", value)}
  color="purple"
  required
  autoComplete="new-password"   // ✅ autofill disable for password
/>


            {/* Submit Button */}
            <div className="pt-4">
              <FriendlyButton type="submit" variant="primary" size="large" fullWidth>
                🚀 Join the Fun!
              </FriendlyButton>
            </div>

            {/* Fun Encouragement */}
            <div className="text-center pt-4">
              <p className="text-gray-500 text-sm">
                Almost ready to start changing the world! ⭐
              </p>
            </div>
          </form>
        </div>

      {/* Fun Facts */}
<div className="mt-8 grid grid-cols-2 gap-4">
  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center 
                  transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
    <div className="text-2xl mb-2">🌟</div>
    <div className="text-sm font-semibold text-blue-700">500+ Kids</div>
    <div className="text-xs text-blue-600">Already joined!</div>
  </div>
  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 text-center 
                  transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
    <div className="text-2xl mb-2">🎯</div>
    <div className="text-sm font-semibold text-green-700">50+ Projects</div>
    <div className="text-xs text-green-600">Ready for you!</div>
  </div>
</div>


      </div>
    </div>
  );
}
