
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Users, Mic, Disc3 } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Singers",
      description: "Professional vocalists for every genre",
      icon: Mic,
      count: "150+ Artists",
      color: "bg-purple-500"
    },
    {
      title: "Dancers",
      description: "From classical to contemporary performers",
      icon: Users,
      count: "200+ Artists", 
      color: "bg-blue-500"
    },
    {
      title: "Speakers",
      description: "Motivational and keynote speakers",
      icon: Music,
      count: "80+ Artists",
      color: "bg-green-500"
    },
    {
      title: "DJs",
      description: "Music mixers for every event type",
      icon: Disc3,
      count: "120+ Artists",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">Browse Artists</Link>
              <Link to="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">Join as Artist</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect with
            </span>
            <br />
            <span className="text-gray-900">Performing Artists</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The premier platform connecting event planners with talented artists. 
            Book singers, dancers, speakers, and DJs for your next unforgettable event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
                Explore Artists
              </Button>
            </Link>
            <Link to="/onboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-purple-200 hover:bg-purple-50">
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Talent by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect artist for your event from our diverse community of performers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm font-semibold text-purple-600 mb-4">
                    {category.count}
                  </div>
                  <Link to={`/artists?category=${category.title.toLowerCase()}`}>
                    <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200">
                      Browse {category.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Perfect Artist?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of event planners who trust Artistly to connect them with amazing talent
          </p>
          <Link to="/artists">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-50">
              Start Browsing Artists
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Artistly</span>
              </div>
              <p className="text-gray-400">
                Connecting event planners with talented performing artists worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">For Event Planners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/artists" className="hover:text-white transition-colors">Browse Artists</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">For Artists</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/onboard" className="hover:text-white transition-colors">Join Artistly</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Artistly. All rights reserved. Built for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
