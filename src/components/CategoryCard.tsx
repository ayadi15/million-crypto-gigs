import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
  href: string;
}

const CategoryCard = ({ icon: Icon, title, count, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <Card className="group hover:shadow-card transition-smooth cursor-pointer h-full">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:bg-accent/10 transition-smooth">
            <Icon className="h-8 w-8 text-accent" />
          </div>
          <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-accent transition-smooth">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{count}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
