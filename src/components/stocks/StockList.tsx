
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Stock {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  priceChange: number;
  recommendation: "buy" | "sell" | "hold";
  targetPrice: number;
  stopLoss: number;
  targetEntry: number;
  trending: boolean;
  inWatchlist: boolean;
  technicalIndicators: {
    rsi: number;
    macd: "bullish" | "bearish" | "neutral";
    bollingerBands: "upper" | "middle" | "lower";
    vwap: "above" | "below";
    stochastic: "overbought" | "oversold" | "neutral";
  };
  fundamentalScore: number;
  technicalScore: number;
  aiConfidenceScore: number;
  aiRationale: string;
}

interface StockListProps {
  stocks: Stock[];
  onSelectStock: (stock: Stock) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onSelectStock }) => {
  const isMobile = useIsMobile();

  if (stocks.length === 0) {
    return (
      <div className="text-center py-8 border rounded-md">
        <p className="text-muted-foreground">No stocks found matching your criteria.</p>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div 
            key={stock.id} 
            className="border rounded-lg p-4 cursor-pointer hover:border-primary/20 transition-colors"
            onClick={() => onSelectStock(stock)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </div>
              <Badge 
                variant="outline"
                className={
                  stock.recommendation === "buy" 
                    ? "bg-green-50 text-green-700 border-green-200" 
                    : stock.recommendation === "sell"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }
              >
                {stock.recommendation.toUpperCase()}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">₹{stock.currentPrice}</div>
              <div className={`flex items-center text-xs ${
                stock.priceChange >= 0 ? "text-green-600" : "text-red-600"
              }`}>
                {stock.priceChange >= 0 ? (
                  <ArrowUpRight size={14} className="mr-1" />
                ) : (
                  <ArrowDownRight size={14} className="mr-1" />
                )}
                <span>{Math.abs(stock.priceChange).toFixed(2)}%</span>
              </div>
              <div className="text-xs">
                <span className="text-muted-foreground">Target: </span>
                <span>₹{stock.targetPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Recommendation</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Stop Loss</TableHead>
            <TableHead>AI Confidence</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow 
              key={stock.id} 
              className="cursor-pointer hover:bg-muted/50" 
              onClick={() => onSelectStock(stock)}
            >
              <TableCell className="font-medium">
                <div>{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </TableCell>
              <TableCell>₹{stock.currentPrice}</TableCell>
              <TableCell className={stock.priceChange >= 0 ? "text-green-600" : "text-red-600"}>
                <div className="flex items-center">
                  {stock.priceChange >= 0 ? (
                    <ArrowUpRight size={14} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={14} className="mr-1" />
                  )}
                  <span>{Math.abs(stock.priceChange).toFixed(2)}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline"
                  className={
                    stock.recommendation === "buy" 
                      ? "bg-green-50 text-green-700 border-green-200" 
                      : stock.recommendation === "sell"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }
                >
                  {stock.recommendation.toUpperCase()}
                </Badge>
              </TableCell>
              <TableCell>₹{stock.targetPrice}</TableCell>
              <TableCell>₹{stock.stopLoss}</TableCell>
              <TableCell>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      stock.aiConfidenceScore > 80 
                        ? "bg-green-500" 
                        : stock.aiConfidenceScore > 60 
                        ? "bg-amber-500" 
                        : "bg-red-500"
                    }`} 
                    style={{ width: `${stock.aiConfidenceScore}%` }}
                  />
                </div>
                <div className="text-xs text-center mt-1">{stock.aiConfidenceScore}%</div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockList;
