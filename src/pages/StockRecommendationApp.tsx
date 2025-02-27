
import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  BarChart, 
  ArrowUpRight, 
  ArrowDownRight,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StockList from "@/components/stocks/StockList";
import TechnicalIndicators from "@/components/stocks/TechnicalIndicators";
import MarketOverview from "@/components/stocks/MarketOverview";
import IndicesPredictor from "@/components/stocks/IndicesPredictor";
import { mockStockData } from "@/data/mockStockData";
import { mockIndicesData } from "@/data/mockIndicesData";

const StockRecommendationApp = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStocks, setFilteredStocks] = useState(mockStockData);
  const [selectedStock, setSelectedStock] = useState(mockStockData[0]);
  const [marketTrend, setMarketTrend] = useState<"bullish" | "bearish" | "neutral">("bullish");

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockStockData.filter(stock => 
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStocks(filtered);
    } else {
      setFilteredStocks(mockStockData);
    }
  }, [searchQuery]);

  const handleStockSelect = (stock: typeof mockStockData[0]) => {
    setSelectedStock(stock);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col lg:flex-row items-start gap-6 mb-8">
        <div className="w-full lg:w-8/12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Smart Stock Recommendations</h1>
              <p className="text-muted-foreground mt-1">AI-powered analysis for the Indian stock market</p>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search stocks..." 
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <MarketOverview
            nifty={mockIndicesData.nifty}
            bankNifty={mockIndicesData.bankNifty}
            sensex={mockIndicesData.sensex}
            marketTrend={marketTrend}
          />
          
          <div className="mt-6">
            <Tabs defaultValue="recommendations" className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommendations">Top Recommendations</TabsTrigger>
                <TabsTrigger value="trending">Trending Stocks</TabsTrigger>
                <TabsTrigger value="watchlist">Your Watchlist</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recommendations" className="mt-6">
                <StockList stocks={filteredStocks.filter(s => s.recommendation !== "hold")} onSelectStock={handleStockSelect} />
              </TabsContent>
              
              <TabsContent value="trending" className="mt-6">
                <StockList stocks={filteredStocks.filter(s => s.trending)} onSelectStock={handleStockSelect} />
              </TabsContent>
              
              <TabsContent value="watchlist" className="mt-6">
                <StockList stocks={filteredStocks.filter(s => s.inWatchlist)} onSelectStock={handleStockSelect} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="w-full lg:w-4/12 mt-6 lg:mt-0">
          {selectedStock && (
            <Card className="sticky top-20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      {selectedStock.symbol} 
                      <Badge 
                        variant="outline"
                        className={`ml-2 ${
                          selectedStock.recommendation === "buy" 
                            ? "bg-green-50 text-green-700 border-green-200" 
                            : selectedStock.recommendation === "sell"
                            ? "bg-red-50 text-red-700 border-red-200"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        {selectedStock.recommendation.toUpperCase()}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">{selectedStock.name}</CardDescription>
                  </div>
                  <div className={`text-lg font-bold ${
                    selectedStock.priceChange >= 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    ₹{selectedStock.currentPrice}
                    <div className="flex items-center text-xs">
                      {selectedStock.priceChange >= 0 ? (
                        <ArrowUpRight size={14} className="mr-1" />
                      ) : (
                        <ArrowDownRight size={14} className="mr-1" />
                      )}
                      <span>{Math.abs(selectedStock.priceChange).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <TechnicalIndicators 
                  indicators={selectedStock.technicalIndicators} 
                  fundamentalScore={selectedStock.fundamentalScore}
                  technicalScore={selectedStock.technicalScore}
                  aiConfidenceScore={selectedStock.aiConfidenceScore}
                />
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">AI Recommendation</h3>
                  <div className="rounded-lg border p-4 bg-muted/30">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-sm font-medium">{selectedStock.recommendation === "buy" ? "Entry Price" : "Exit Price"}</span>
                        <p className="text-lg font-bold">₹{selectedStock.targetEntry}</p>
                      </div>
                      <ArrowRight className="text-muted-foreground" />
                      <div>
                        <span className="text-sm font-medium">Target Price</span>
                        <p className="text-lg font-bold">₹{selectedStock.targetPrice}</p>
                      </div>
                      <ArrowRight className="text-muted-foreground" />
                      <div>
                        <span className="text-sm font-medium">Stop Loss</span>
                        <p className="text-lg font-bold">₹{selectedStock.stopLoss}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedStock.aiRationale}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between gap-4">
                  <Button className="w-1/2">View Analysis</Button>
                  <Button variant="outline" className="w-1/2">Add to Watchlist</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <IndicesPredictor 
        nifty={mockIndicesData.nifty} 
        bankNifty={mockIndicesData.bankNifty} 
      />
    </div>
  );
};

export default StockRecommendationApp;
