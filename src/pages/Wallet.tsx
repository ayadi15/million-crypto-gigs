import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon, TrendingUp, Bitcoin } from "lucide-react";

const Wallet = () => {
  const balances = [
    { crypto: "BTC", name: "Bitcoin", amount: "0.0234", usd: "$1,247.50", icon: "₿", change: "+5.2%" },
    { crypto: "ETH", name: "Ethereum", amount: "2.456", usd: "$4,823.40", icon: "Ξ", change: "+3.8%" },
    { crypto: "USDT", name: "Tether", amount: "8,450", usd: "$8,450.00", icon: "₮", change: "0.0%" },
  ];

  const transactions = [
    {
      id: "1",
      type: "received",
      description: "Payment from Sarah Johnson",
      crypto: "0.05 ETH",
      usd: "$98.20",
      date: "2 hours ago",
      status: "completed",
    },
    {
      id: "2",
      type: "sent",
      description: "Withdrawal to external wallet",
      crypto: "0.5 ETH",
      usd: "$982.00",
      date: "1 day ago",
      status: "completed",
    },
    {
      id: "3",
      type: "received",
      description: "Payment from Mike Chen",
      crypto: "200 USDT",
      usd: "$200.00",
      date: "2 days ago",
      status: "completed",
    },
    {
      id: "4",
      type: "sent",
      description: "Service fee payment",
      crypto: "50 USDT",
      usd: "$50.00",
      date: "3 days ago",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">Crypto Wallet</h1>
                <p className="text-muted-foreground">Manage your cryptocurrency balances</p>
              </div>
              <Button className="bg-accent hover:bg-accent/90">
                <WalletIcon className="mr-2 h-4 w-4" />
                Connect External Wallet
              </Button>
            </div>
          </div>

          {/* Total Balance */}
          <Card className="mb-8 gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <WalletIcon className="h-5 w-5" />
                <p className="text-sm opacity-80">Total Balance</p>
              </div>
              <h2 className="text-4xl font-display font-bold mb-2">$14,520.90</h2>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <TrendingUp className="h-4 w-4" />
                <span>+8.2% this month</span>
              </div>
            </CardContent>
          </Card>

          {/* Crypto Balances */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {balances.map((balance) => (
              <Card key={balance.crypto} className="hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold">
                        {balance.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{balance.name}</p>
                        <p className="text-xs text-muted-foreground">{balance.crypto}</p>
                      </div>
                    </div>
                    <Badge variant={balance.change.startsWith('+') ? 'default' : 'secondary'} className="bg-accent/10 text-accent">
                      {balance.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">{balance.amount}</p>
                    <p className="text-sm text-muted-foreground">{balance.usd}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ArrowDownLeft className="h-4 w-4 mr-1" />
                      Deposit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      Withdraw
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <ArrowDownLeft className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">Deposit Crypto</h3>
                  <p className="text-sm text-muted-foreground">Add funds to your wallet</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <ArrowUpRight className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">Withdraw Funds</h3>
                  <p className="text-sm text-muted-foreground">Transfer to external wallet</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-display">Transaction History</CardTitle>
                <Tabs defaultValue="all" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="received">Received</TabsTrigger>
                    <TabsTrigger value="sent">Sent</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-smooth">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'received' 
                          ? 'bg-green-500/10 text-green-600' 
                          : 'bg-red-500/10 text-red-600'
                      }`}>
                        {tx.type === 'received' ? (
                          <ArrowDownLeft className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{tx.description}</p>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.type === 'received' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.type === 'received' ? '+' : '-'}{tx.crypto}
                      </p>
                      <p className="text-sm text-muted-foreground">{tx.usd}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Load More Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wallet;
