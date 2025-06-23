
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Music, MapPin, Star, Filter } from "lucide-react";

// Mock artist data
const mockArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "singers",
    bio: "Classical and Bollywood vocalist with 10+ years experience",
    location: "Mumbai, India",
    priceRange: "₹25,000 - ₹50,000",
    priceMin: 25000,
    priceMax: 50000,
    rating: 4.9,
    languages: ["Hindi", "English", "Marathi"],
    image: "https://images.unsplash.com/photo-1494790108755-2616c96345cb?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    category: "djs",
    bio: "Electronic music producer and DJ specializing in fusion beats",
    location: "Delhi, India",
    priceRange: "₹15,000 - ₹30,000",
    priceMin: 15000,
    priceMax: 30000,
    rating: 4.7,
    languages: ["Hindi", "English", "Punjabi"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Sneha Patel",
    category: "dancers",
    bio: "Contemporary and classical dance performer",
    location: "Ahmedabad, India",
    priceRange: "₹20,000 - ₹40,000",
    priceMin: 20000,
    priceMax: 40000,
    rating: 4.8,
    languages: ["Hindi", "English", "Gujarati"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    category: "speakers",
    bio: "Motivational speaker and business consultant",
    location: "Bangalore, India",
    priceRange: "₹35,000 - ₹75,000",
    priceMin: 35000,
    priceMax: 75000,
    rating: 4.9,
    languages: ["Hindi", "English", "Kannada"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Kavya Menon",
    category: "singers",
    bio: "South Indian classical and fusion vocalist",
    location: "Chennai, India",
    priceRange: "₹30,000 - ₹60,000",
    priceMin: 30000,
    priceMax: 60000,
    rating: 4.8,
    languages: ["Tamil", "English", "Malayalam"],
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Arjun Singh",
    category: "dancers",
    bio: "Hip-hop and street dance choreographer",
    location: "Pune, India",
    priceRange: "₹18,000 - ₹35,000",
    priceMin: 18000,
    priceMax: 35000,
    rating: 4.6,
    languages: ["Hindi", "English", "Marathi"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
];

const Artists = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");

  const filteredArtists = useMemo(() => {
    return mockArtists.filter(artist => {
      const categoryMatch = categoryFilter === "all" || artist.category === categoryFilter;
      const locationMatch = locationFilter === "all" || artist.location.includes(locationFilter);
      const priceMatch = (() => {
        if (priceFilter === "all") return true;
        if (priceFilter === "low") return artist.priceMax <= 30000;
        if (priceFilter === "medium") return artist.priceMin >= 25000 && artist.priceMax <= 60000;
        if (priceFilter === "high") return artist.priceMin >= 50000;
        return true;
      })();
      
      return categoryMatch && locationMatch && priceMatch;
    });
  }, [categoryFilter, locationFilter, priceFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/artists" className="text-purple-600 font-medium">Browse Artists</Link>
              <Link to="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">Join as Artist</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Artists
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collection of talented performers ready to make your event unforgettable
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-100">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Artists</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="singers">Singers</SelectItem>
                  <SelectItem value="dancers">Dancers</SelectItem>
                  <SelectItem value="speakers">Speakers</SelectItem>
                  <SelectItem value="djs">DJs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ₹30,000</SelectItem>
                  <SelectItem value="medium">₹25,000 - ₹60,000</SelectItem>
                  <SelectItem value="high">Above ₹50,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArtists.length} of {mockArtists.length} artists
          </p>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="relative">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{artist.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2 capitalize bg-purple-100 text-purple-700">
                    {artist.category.replace('s', '').slice(0, -1)}
                  </Badge>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{artist.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-sm">
                  {artist.bio}
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="text-sm font-semibold text-purple-600">
                    {artist.priceRange}
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {artist.languages.slice(0, 2).map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                    {artist.languages.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{artist.languages.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Ask for Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
            <Button 
              onClick={() => {
                setCategoryFilter("all");
                setLocationFilter("all");
                setPriceFilter("all");
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
