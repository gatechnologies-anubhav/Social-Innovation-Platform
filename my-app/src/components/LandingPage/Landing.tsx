"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Star, Gift, Users, Sparkles, Zap, Trophy } from "lucide-react";
import FriendlyButton from "@/components/shared/FriendlyButton";

export default function Landing() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full float-animation"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full float-animation" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Make a Difference,</span>
                <br />
                <span className="text-green-600">Have Fun!</span>
                <span className="inline-block ml-2 float-animation rainbow-animation">
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" fill="currentColor" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-bold">
                Join thousands of young changemakers creating amazing projects to help our world! 🌍
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/auth">
                  <FriendlyButton variant="primary" size="large" icon={Users} onClick={() => console.log("Join Now clicked")}>
                    🚀 Join Now
                  </FriendlyButton>
                </Link>
                <Link href="/projects">
                  <FriendlyButton variant="secondary" size="large" icon={Gift} onClick={() => console.log("Explore Projects clicked")}>
                    🎁 Explore Projects
                  </FriendlyButton>
                </Link>
              </div>

              {/* Fun Stats */}
              <div className="flex justify-center lg:justify-start space-x-8 mt-12">
                <div className="text-center wiggle-hover">
                  <div className="text-3xl font-black text-blue-600">500+</div>
                  <div className="text-sm text-gray-500 font-bold">🦸‍♀️ Young Heroes</div>
                </div>
                <div className="text-center wiggle-hover">
                  <div className="text-3xl font-black text-green-600">50+</div>
                  <div className="text-sm text-gray-500 font-bold">⭐ Amazing Projects</div>
                </div>
                <div className="text-center wiggle-hover">
                  <div className="text-3xl font-black text-yellow-600">$5K+</div>
                  <div className="text-sm text-gray-500 font-bold">💰 Raised Together</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8 bubble-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1544776527-59a43e6dd264?w=600&h=600&fit=crop&crop=faces"
                  alt="Kids collaborating on projects"
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center float-animation bubble-shadow wiggle-hover">
                  <Star className="w-10 h-10 text-white" fill="currentColor" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center float-animation bubble-shadow wiggle-hover" style={{animationDelay: '1s'}}>
                  <Heart className="w-10 h-10 text-white" fill="currentColor" />
                </div>
                <div className="absolute top-1/2 -right-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center float-animation bubble-shadow wiggle-hover" style={{animationDelay: '2s'}}>
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 -left-4 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center float-animation bubble-shadow wiggle-hover" style={{animationDelay: '0.5s'}}>
                  <Zap className="w-7 h-7 text-white" fill="currentColor" />
                </div>
                <div className="absolute bottom-1/3 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center float-animation bubble-shadow wiggle-hover" style={{animationDelay: '1.5s'}}>
                  <Trophy className="w-6 h-6 text-white" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg wiggle-hover">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">🎉 Kids Making Magic!</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-600">Project Progress</span>
                    <span className="text-xs font-bold text-green-600">85% Complete! 🎯</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 float-animation" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 float-animation" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/3 left-20 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 float-animation" style={{animationDelay: '2.2s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Kids Love KidsChange? 🎉
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              We make helping others fun, easy, and rewarding for young minds!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100  bubble-shadow">
              <div className="w-20 h-20 fun-gradient rounded-full mx-auto mb-6 flex items-center justify-center float-animation">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Easy Projects</h3>
              <p className="text-gray-600 text-lg">
                Simple, fun projects designed just for kids. No complicated stuff - just pure impact! ✨
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100  bubble-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center float-animation" style={{animationDelay: '0.5s'}}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Amazing Friends</h3>
              <p className="text-gray-600 text-lg">
                Meet other young changemakers and work together on awesome projects! 🤝
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100  bubble-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center float-animation" style={{animationDelay: '1s'}}>
                <Star className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Earn Rewards</h3>
              <p className="text-gray-600 text-lg">
                Get cool badges and stickers for every project you complete! 🏆
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 fun-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-lg">
            Ready to Start Your Adventure? 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-bold">
            Join our community of young heroes and start making the world a better place today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <FriendlyButton variant="white" size="large" icon={ArrowRight} onClick={() => console.log("Get Started Now clicked")}>
                🎯 Get Started Now
              </FriendlyButton>
            </Link>
          </div>

          {/* Floating Hearts */}
          <div className="flex justify-center space-x-8 mt-12">
            <Heart className="w-8 h-8 text-pink-200 float-animation rainbow-animation" fill="currentColor" />
            <Star className="w-8 h-8 text-yellow-200 float-animation rainbow-animation" fill="currentColor" style={{animationDelay: '0.5s'}} />
            <Gift className="w-8 h-8 text-green-200 float-animation rainbow-animation" style={{animationDelay: '1s'}} />
            <Heart className="w-8 h-8 text-purple-200 float-animation rainbow-animation" fill="currentColor" style={{animationDelay: '1.5s'}} />
            <Star className="w-8 h-8 text-blue-200 float-animation rainbow-animation" fill="currentColor" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </section>
    </div>
  );
}
