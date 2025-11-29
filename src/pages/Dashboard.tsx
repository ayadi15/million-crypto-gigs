import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, ShoppingBag, Clock, MessageCircle, Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";

const Dashboard = () => {
  const stats = [
    { 
      title: "Active Orders", 
      value: "12", 
      icon: ShoppingBag, 
      change: "+3 this week",
      color: "text-accent"
    },
    { 
      title: "Total Earnings", 
      value: "2,450 M+", 
      icon: DollarSign, 
      change: "≈ 2,450 XRP ($5,267)",
      color: "text-accent"
    },
    { 
      title: "Completed Orders", 
      value: "487", 
      icon: TrendingUp, 
      change: "+15 this month",
      color: "text-accent"
    },
    { 
      title: "Response Rate", 
      value: "98%", 
      icon: MessageCircle, 
      change: "Within 1 hour",
      color: "text-accent"
    },
  ];

  const recentOrders = [
    {
      id: "1",
      title: "Professional Website Design",
      buyer: "Sarah Johnson",
      status: "In Progress",
      amount: "50 M+",
      deadline: "2 days",
    },
    {
      id: "2",
      title: "Logo Design Package",
      buyer: "Mike Chen",
      status: "Delivered",
      amount: "20 M+",
      deadline: "Completed",
    },
    {
      id: "3",
      title: "Video Editing Service",
      buyer: "Emma Wilson",
      status: "In Progress",
      amount: "150 M+",
      deadline: "4 days",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <img 
                src={avatar1} 
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold">Welcome back, Alex! 👋</h1>
                <p className="text-muted-foreground">Here's what's happening with your business today.</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-accent/10 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-display">Recent Orders</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-smooth">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{order.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">Buyer: {order.buyer}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant={order.status === "In Progress" ? "default" : "secondary"}>
                              {order.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {order.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{order.amount}</p>
                          <Button size="sm" className="mt-2 bg-accent hover:bg-accent/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Tips */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Create New Gig
                  </Button>
                  <Button variant="outline" className="w-full">
                    Manage Services
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Messages
                  </Button>
                  <Button variant="outline" className="w-full">
                    Withdraw Earnings
                  </Button>
                </CardContent>
              </Card>

              {/* Business Tips */}
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Upgrade Your Business
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Add portfolio items to showcase your work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Respond to messages within 1 hour to boost ranking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Offer multiple packages to increase sales</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">This Month</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Orders Completed</span>
                      <span className="font-semibold">15/20</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Client Satisfaction</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
