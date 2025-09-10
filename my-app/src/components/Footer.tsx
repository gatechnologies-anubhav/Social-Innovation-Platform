import { Gift, Heart, Sparkles, Star } from "lucide-react"

export const Footer =()=>{
    return(
        <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Heart className="w-12 h-12 float-animation rainbow-animation" fill="currentColor" />
            <Star className="w-12 h-12 float-animation rainbow-animation" fill="currentColor" style={{ animationDelay: "1s" }} />
            <Gift className="w-12 h-12 float-animation rainbow-animation" style={{ animationDelay: "2s" }} />
            <Sparkles className="w-12 h-12 float-animation rainbow-animation" fill="currentColor" style={{ animationDelay: "1.5s" }} />
          </div>
          <h3 className="text-4xl font-black mb-4 drop-shadow-lg">🌟 Together We Make Magic! 🌟</h3>
          <p className="text-xl text-purple-100 font-bold">KidsChange - Where young hearts create BIG impacts! 💫</p>
        </div>
      </footer>
    )
}