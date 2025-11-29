import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import serviceWebImg from "@/assets/service-web.jpg";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceVideoImg from "@/assets/service-video.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { SlidersHorizontal } from "lucide-react";

const BrowseServices = () => {
  const services = [
    {
      id: "1",
      image: serviceWebImg,
      title: "I will create a professional responsive website with React",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "0.05",
      crypto: "ETH",
      deliveryTime: "3 days",
      featured: true,
    },
    {
      id: "2",
      image: serviceDesignImg,
      title: "I will design a modern logo and brand identity",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "0.02",
      crypto: "ETH",
      deliveryTime: "2 days",
      featured: true,
    },
    {
      id: "3",
      image: serviceVideoImg,
      title: "I will edit your video professionally with color grading",
      seller: { name: "Marcus Silva", avatar: avatar3, rating: 4.8, reviews: 198 },
      price: "150",
      crypto: "USDT",
      deliveryTime: "5 days",
    },
    {
      id: "4",
      image: serviceWebImg,
      title: "I will develop a custom WordPress website",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "200",
      crypto: "USDT",
      deliveryTime: "7 days",
    },
    {
      id: "5",
      image: serviceDesignImg,
      title: "I will create stunning social media graphics",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "50",
      crypto: "USDT",
      deliveryTime: "1 day",
    },
    {
      id: "6",
      image: serviceVideoImg,
      title: "I will produce a professional promotional video",
      seller: { name: "Marcus Silva", avatar: avatar3, rating: 4.8, reviews: 198 },
      price: "0.08",
      crypto: "ETH",
      deliveryTime: "5 days",
    },
  ];

  const categories = ["Web Development", "Graphic Design", "Writing", "Video Editing", "Marketing", "SEO"];
  const deliveryTimes = ["24 Hours", "3 Days", "7 Days", "Anytime"];
  const sellerLevels = ["New Seller", "Level 1", "Level 2", "Top Rated"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="h-5 w-5 text-accent" />
                    <h3 className="font-display font-semibold text-lg">Filters</h3>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <Checkbox id={category} />
                          <Label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Price Range (USDT)</h4>
                    <Slider defaultValue={[0, 1000]} max={1000} step={10} className="mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$0</span>
                      <span>$1000+</span>
                    </div>
                  </div>

                  {/* Delivery Time */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Delivery Time</h4>
                    <div className="space-y-2">
                      {deliveryTimes.map((time) => (
                        <div key={time} className="flex items-center gap-2">
                          <Checkbox id={time} />
                          <Label htmlFor={time} className="text-sm cursor-pointer">
                            {time}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seller Level */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Seller Level</h4>
                    <div className="space-y-2">
                      {sellerLevels.map((level) => (
                        <div key={level} className="flex items-center gap-2">
                          <Checkbox id={level} />
                          <Label htmlFor={level} className="text-sm cursor-pointer">
                            {level}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90">Apply Filters</Button>
                </CardContent>
              </Card>
            </aside>

            {/* Services Grid */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">Browse Services</h1>
                  <p className="text-muted-foreground">Showing 2,487 services</p>
                </div>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Filter Button */}
              <Button variant="outline" className="lg:hidden w-full mb-6">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Show Filters
              </Button>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">...</Button>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseServices;
