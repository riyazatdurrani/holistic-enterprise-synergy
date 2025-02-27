
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MarketOverviewProps {
  nifty: {
    value: number;
    change: number;
    changePercentage: number;
  };
  bankNifty: {
    value: number;
    change: number;
    changePercentage: number;
  };
  sensex: {
    value: number;
    change: number;
    changePercentage: number;
  };
  marketTrend: "bullish" | "bearish" | "neutral";
}

const MarketOverview: React.FC<MarketOverviewProps> = ({
  nifty,
  bankNifty,
  sensex,
  marketTrend
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="bg-background">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">NIFTY 50</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{nifty.value.toLocaleString()}</h3>
            </div>
            <div 
              className={`rounded-md p-2 ${
                nifty.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              {nifty.change >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            </div>
          </div>
          
          <div className="flex items-center mt-1">
            <div 
              className={`text-xs font-medium rounded-full px-1.5 py-0.5 ${
                nifty.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              <div className="flex items-center">
                {nifty.change >= 0 ? (
                  <ArrowUpRight size={14} className="mr-1" />
                ) : (
                  <ArrowDownRight size={14} className="mr-1" />
                )}
                <span>{Math.abs(nifty.changePercentage).toFixed(2)}%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground ml-2">
              {nifty.change >= 0 ? "+" : ""}{nifty.change.toFixed(2)} today
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">BANK NIFTY</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{bankNifty.value.toLocaleString()}</h3>
            </div>
            <div 
              className={`rounded-md p-2 ${
                bankNifty.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              {bankNifty.change >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            </div>
          </div>
          
          <div className="flex items-center mt-1">
            <div 
              className={`text-xs font-medium rounded-full px-1.5 py-0.5 ${
                bankNifty.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              <div className="flex items-center">
                {bankNifty.change >= 0 ? (
                  <ArrowUpRight size={14} className="mr-1" />
                ) : (
                  <ArrowDownRight size={14} className="mr-1" />
                )}
                <span>{Math.abs(bankNifty.changePercentage).toFixed(2)}%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground ml-2">
              {bankNifty.change >= 0 ? "+" : ""}{bankNifty.change.toFixed(2)} today
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">SENSEX</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{sensex.value.toLocaleString()}</h3>
            </div>
            <div 
              className={`rounded-md p-2 ${
                sensex.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              {sensex.change >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            </div>
          </div>
          
          <div className="flex items-center mt-1">
            <div 
              className={`text-xs font-medium rounded-full px-1.5 py-0.5 ${
                sensex.change >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              }`}
            >
              <div className="flex items-center">
                {sensex.change >= 0 ? (
                  <ArrowUpRight size={14} className="mr-1" />
                ) : (
                  <ArrowDownRight size={14} className="mr-1" />
                )}
                <span>{Math.abs(sensex.changePercentage).toFixed(2)}%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground ml-2">
              {sensex.change >= 0 ? "+" : ""}{sensex.change.toFixed(2)} today
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Market Sentiment</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">
                {marketTrend === "bullish" 
                  ? "Bullish" 
                  : marketTrend === "bearish" 
                  ? "Bearish" 
                  : "Neutral"}
              </h3>
            </div>
            <div 
              className={`rounded-md p-2 ${
                marketTrend === "bullish" 
                  ? "bg-green-50 text-green-600" 
                  : marketTrend === "bearish" 
                  ? "bg-red-50 text-red-600" 
                  : "bg-yellow-50 text-yellow-600"
              }`}
            >
              {marketTrend === "bullish" 
                ? <TrendingUp size={20} /> 
                : marketTrend === "bearish" 
                ? <TrendingDown size={20} /> 
                : <TrendingUp size={20} />}
            </div>
          </div>
          
          <div className="flex items-center mt-1">
            <div 
              className={`text-xs font-medium rounded-full px-1.5 py-0.5 ${
                marketTrend === "bullish" 
                  ? "bg-green-50 text-green-600" 
                  : marketTrend === "bearish" 
                  ? "bg-red-50 text-red-600" 
                  : "bg-yellow-50 text-yellow-600"
              }`}
            >
              AI Prediction
            </div>
            <p className="text-xs text-muted-foreground ml-2">
              Based on market indicators
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOverview;
