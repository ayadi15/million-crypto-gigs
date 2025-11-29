import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon, TrendingUp, RefreshCw } from "lucide-react";
import millionPlusCoin from "@/assets/million-plus-coin.png";

const Wallet = () => {
  // Current XRP price (in real app, this would be fetched from API)
  const xrpPriceUSD = 2.15;
  const millionPlusBalance = 1250;
  const xrpEquivalent = millionPlusBalance * 1; // 1 M+ = 1 XRP
  const usdValue = (xrpEquivalent * xrpPriceUSD).toFixed(2);

  const transactions = [
    {
      id: "1",
      type: "received",
      description: "Payment from Sarah Johnson",
      crypto: "50 M+",
      usd: "$107.50",
      date: "2 hours ago",
      status: "completed",
      xrplTx: "A1B2C3D4E5F6...",
    },
    {
      id: "2",
      type: "sent",
      description: "Withdrawal to XRPL wallet",
      crypto: "500 M+",
      usd: "$1,075.00",
      date: "1 day ago",
      status: "completed",
      xrplTx: "F6E5D4C3B2A1...",
    },
    {
      id: "3",
      type: "received",
      description: "Payment from Mike Chen",
      crypto: "200 M+",
      usd: "$430.00",
      date: "2 days ago",
      status: "completed",
      xrplTx: "G7H8I9J0K1L2...",
    },
    {
      id: "4",
      type: "sent",
      description: "Platform service fee",
      crypto: "25 M+",
      usd: "$53.75",
      date: "3 days ago",
      status: "completed",
      xrplTx: "M3N4O5P6Q7R8...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">Million+ Wallet</h1>
                <p className="text-muted-foreground">Manage your M+ balance on XRPL</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 md:flex-none">
                  <WalletIcon className="mr-2 h-4 w-4" />
                  Connect XUMM
                </Button>
                <Button variant="outline" className="flex-1 md:flex-none">
                  <WalletIcon className="mr-2 h-4 w-4" />
                  Connect Crossmark
                </Button>
              </div>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              <span className="mr-1">⚡</span> Built on XRPL - Fast & Secure
            </Badge>
          </div>

          {/* Total Balance */}
          <Card className="mb-8 gradient-hero text-primary-foreground overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <img src={millionPlusCoin} alt="M+ Coin" className="w-12 h-12" />
                <div>
                  <p className="text-sm opacity-80">Million+ Coin Balance</p>
                  <p className="text-xs opacity-60">Built on XRP Ledger</p>
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-5xl font-display font-bold">{millionPlusBalance.toLocaleString()}</h2>
                <span className="text-2xl font-semibold text-accent">M+</span>
              </div>
              <div className="flex items-center gap-4 text-sm opacity-80 mb-4">
                <span>≈ {xrpEquivalent.toLocaleString()} XRP</span>
                <span>•</span>
                <span>≈ ${usdValue} USD</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <TrendingUp className="h-4 w-4" />
                <span>+8.2% this month</span>
              </div>
              <div className="absolute top-4 right-4 opacity-10">
                <img src={millionPlusCoin} alt="" className="w-32 h-32" />
              </div>
            </CardContent>
          </Card>

          {/* M+ to XRP Converter */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                M+ to XRP Converter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Million+ Coin (M+)</label>
                  <Input 
                    type="number" 
                    placeholder="Enter M+ amount" 
                    className="text-lg"
                    defaultValue="100"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">XRP Equivalent</label>
                  <div className="h-12 bg-secondary rounded-md flex items-center px-4 text-lg font-semibold">
                    100 XRP
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Exchange Rate</span>
                  <span className="font-semibold">1 M+ = 1 XRP</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Current XRP Price</span>
                  <span className="font-semibold">${xrpPriceUSD} USD</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <ArrowDownLeft className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">Deposit M+</h3>
                  <p className="text-sm text-muted-foreground">Add M+ to your wallet via XRPL</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <ArrowUpRight className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">Withdraw to XRPL</h3>
                  <p className="text-sm text-muted-foreground">Transfer M+ to external XRPL wallet</p>
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
                  <div key={tx.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-smooth gap-3">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
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
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold mb-1">{tx.description}</p>
                        <div className="flex flex-col gap-1">
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            XRPL TX: {tx.xrplTx}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right md:text-right flex md:flex-col justify-between md:justify-start items-end gap-1">
                      <p className={`font-bold text-lg ${tx.type === 'received' ? 'text-green-600' : 'text-red-600'}`}>
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
