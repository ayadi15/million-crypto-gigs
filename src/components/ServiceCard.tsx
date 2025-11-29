import { Star, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  image: string;
  title: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  price: string;
  crypto: string;
  deliveryTime: string;
  featured?: boolean;
}

const ServiceCard = ({ id, image, title, seller, price, crypto, deliveryTime, featured }: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`}>
      <Card className="group overflow-hidden hover:shadow-elevated transition-smooth cursor-pointer">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          {featured && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <img 
              src={seller.avatar} 
              alt={seller.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{seller.name}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-orange text-orange" />
                <span>{seller.rating}</span>
                <span>({seller.reviews})</span>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-accent transition-smooth">
            {title}
          </h3>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{deliveryTime}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="font-bold text-primary">
              {price} <span className="text-xs text-accent">{crypto}</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
