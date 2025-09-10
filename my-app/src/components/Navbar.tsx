"use client"
import { Gift, Heart, Home, Sparkles, Star, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Navbar =()=>{
    const pathname = usePathname();
    const navLinks = [
        { name: "Landing", href: "/", label: "🏠 Home", icon: Home, color: "bg-blue-400", activeColor: "text-purple-600" },
        { name: "Projects", href: "/projects", label: "🎁 Projects", icon: Gift, color: "bg-green-400", activeColor: "text-green-600" },
        { name: "Registration", href: "/auth", label: "👥 Join Fun!", icon: Users, color: "bg-yellow-400", activeColor: "text-yellow-600" },
      ];
    return(
        <nav className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center h-20 ">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 wiggle-hover ">
              <div className="relative ">
                <div className="w-16 h-16 rainbow-animation rounded-full flex items-center justify-center bg-white shadow-lg">
                  <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center float-animation">
                  <Star className="w-3 h-3 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-3xl font-black text-white drop-shadow-lg">KidsChange</h1>
                <p className="text-sm text-yellow-200 font-bold">✨ Make Magic Happen! ✨</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map(({ href, label, icon: Icon, color, activeColor }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 wiggle-hover shadow-lg ${
                    pathname === href
                      ? `bg-white ${activeColor} shadow-xl`
                      : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  }`}
                >
                  <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center wiggle-hover shadow-lg">
                <Sparkles className="w-7 h-7 text-purple-500 rainbow-animation" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          <div className="flex justify-around py-6">
            {navLinks.map(({ href, label, icon: Icon, color }) => (
              <Link key={href} href={href} className="flex flex-col items-center space-y-2 wiggle-hover">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
                </div>
                <span className="text-sm font-bold text-white">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
}