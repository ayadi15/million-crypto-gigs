import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import serviceWebImg from "@/assets/service-web.jpg";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceVideoImg from "@/assets/service-video.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { SlidersHorizontal, X } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const BrowseServices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedDeliveryTimes, setSelectedDeliveryTimes] = useState<string[]>([]);
  const [selectedSellerLevels, setSelectedSellerLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get initial values from URL
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      const categoryMap: { [key: string]: string } = {
        "web": "Web Development",
        "design": "Graphic Design",
        "writing": "Writing",
        "video": "Video Editing",
        "marketing": "Marketing",
        "seo": "SEO"
      };
      const categoryName = categoryMap[cat];
      if (categoryName && !selectedCategories.includes(categoryName)) {
        setSelectedCategories([categoryName]);
      }
    }
  }, []);

  const allServices = [
    {
      id: "1",
      image: serviceWebImg,
      title: "I will create a professional responsive website with React",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "0.05",
      crypto: "ETH",
      deliveryTime: "3 days",
      category: "Web Development",
      priceUSD: 100,
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
      category: "Graphic Design",
      priceUSD: 40,
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
      category: "Video Editing",
      priceUSD: 150,
    },
    {
      id: "4",
      image: serviceWebImg,
      title: "I will develop a custom WordPress website",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "200",
      crypto: "USDT",
      deliveryTime: "7 days",
      category: "Web Development",
      priceUSD: 200,
    },
    {
      id: "5",
      image: serviceDesignImg,
      title: "I will create stunning social media graphics",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "50",
      crypto: "USDT",
      deliveryTime: "1 day",
      category: "Graphic Design",
      priceUSD: 50,
    },
    {
      id: "6",
      image: serviceVideoImg,
      title: "I will produce a professional promotional video",
      seller: { name: "Marcus Silva", avatar: avatar3, rating: 4.8, reviews: 198 },
      price: "0.08",
      crypto: "ETH",
      deliveryTime: "5 days",
      category: "Video Editing",
      priceUSD: 160,
    },
    {
      id: "7",
      image: serviceWebImg,
      title: "I will build a full-stack web application",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "500",
      crypto: "USDT",
      deliveryTime: "14 days",
      category: "Web Development",
      priceUSD: 500,
    },
    {
      id: "8",
      image: serviceDesignImg,
      title: "I will design your complete brand package",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "0.15",
      crypto: "ETH",
      deliveryTime: "7 days",
      category: "Graphic Design",
      priceUSD: 300,
    },
    {
      id: "9",
      image: serviceVideoImg,
      title: "I will create animated explainer videos",
      seller: { name: "Marcus Silva", avatar: avatar3, rating: 4.8, reviews: 198 },
      price: "250",
      crypto: "USDT",
      deliveryTime: "10 days",
      category: "Video Editing",
      priceUSD: 250,
    },
  ];

  const categories = ["Web Development", "Graphic Design", "Writing", "Video Editing", "Marketing", "SEO"];
  const deliveryTimes = ["24 Hours", "3 Days", "7 Days", "Anytime"];
  const sellerLevels = ["New Seller", "Level 1", "Level 2", "Top Rated"];

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = [...allServices];

    // Search query filter
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.seller.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(service => selectedCategories.includes(service.category));
    }

    // Price range filter
    filtered = filtered.filter(service => 
      service.priceUSD >= priceRange[0] && service.priceUSD <= priceRange[1]
    );

    // Delivery time filter
    if (selectedDeliveryTimes.length > 0) {
      filtered = filtered.filter(service => {
        if (selectedDeliveryTimes.includes("24 Hours") && service.deliveryTime === "1 day") return true;
        if (selectedDeliveryTimes.includes("3 Days") && service.deliveryTime === "3 days") return true;
        if (selectedDeliveryTimes.includes("7 Days") && (service.deliveryTime === "7 days" || service.deliveryTime === "5 days")) return true;
        if (selectedDeliveryTimes.includes("Anytime")) return true;
        return false;
      });
    }

    // Sort services
    switch (sortBy) {
      case "newest":
        filtered.reverse();
        break;
      case "price-low":
        filtered.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case "price-high":
        filtered.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case "rating":
        filtered.sort((a, b) => b.seller.rating - a.seller.rating);
        break;
      default:
        // Recommended - featured first
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [allServices, selectedCategories, priceRange, selectedDeliveryTimes, sortBy, searchParams]);

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleDeliveryTimeToggle = (time: string) => {
    setSelectedDeliveryTimes(prev =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
    setCurrentPage(1);
  };

  const handleSellerLevelToggle = (level: string) => {
    setSelectedSellerLevels(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSelectedDeliveryTimes([]);
    setSelectedSellerLevels([]);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedDeliveryTimes.length > 0 || 
    selectedSellerLevels.length > 0 || 
    priceRange[0] > 0 || 
    priceRange[1] < 1000;

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-accent" />
          <h3 className="font-display font-semibold text-lg">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox 
                id={category} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
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
        <Slider 
          value={priceRange} 
          onValueChange={setPriceRange} 
          max={1000} 
          step={10} 
          className="mb-2" 
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>

      {/* Delivery Time */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Delivery Time</h4>
        <div className="space-y-2">
          {deliveryTimes.map((time) => (
            <div key={time} className="flex items-center gap-2">
              <Checkbox 
                id={time} 
                checked={selectedDeliveryTimes.includes(time)}
                onCheckedChange={() => handleDeliveryTimeToggle(time)}
              />
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
              <Checkbox 
                id={level} 
                checked={selectedSellerLevels.includes(level)}
                onCheckedChange={() => handleSellerLevelToggle(level)}
              />
              <Label htmlFor={level} className="text-sm cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <FilterContent />
                </CardContent>
              </Card>
            </aside>

            {/* Services Grid */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">Browse Services</h1>
                  <p className="text-muted-foreground">
                    {searchParams.get("search") && `Results for "${searchParams.get("search")}" • `}
                    Showing {paginatedServices.length} of {filteredServices.length} services
                  </p>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
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

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCategories.map(cat => (
                    <Button 
                      key={cat} 
                      variant="secondary" 
                      size="sm"
                      onClick={() => handleCategoryToggle(cat)}
                    >
                      {cat} <X className="ml-1 h-3 w-3" />
                    </Button>
                  ))}
                  {selectedDeliveryTimes.map(time => (
                    <Button 
                      key={time} 
                      variant="secondary" 
                      size="sm"
                      onClick={() => handleDeliveryTimeToggle(time)}
                    >
                      {time} <X className="ml-1 h-3 w-3" />
                    </Button>
                  ))}
                </div>
              )}

              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden w-full mb-6">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Show Filters
                    {hasActiveFilters && ` (${selectedCategories.length + selectedDeliveryTimes.length + selectedSellerLevels.length})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {paginatedServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>

              {/* No Results */}
              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl font-display font-semibold mb-2">No services found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      // Show first page, last page, current page, and pages around current
                      if (
                        page === 1 || 
                        page === totalPages || 
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return <PaginationEllipsis key={page} />;
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrowseServices;
