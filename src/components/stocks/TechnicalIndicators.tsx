
import React from "react";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";

interface TechnicalIndicatorsProps {
  indicators: {
    rsi: number;
    macd: "bullish" | "bearish" | "neutral";
    bollingerBands: "upper" | "middle" | "lower";
    vwap: "above" | "below";
    stochastic: "overbought" | "oversold" | "neutral";
  };
  fundamentalScore: number;
  technicalScore: number;
  aiConfidenceScore: number;
}

const TechnicalIndicators: React.FC<TechnicalIndicatorsProps> = ({
  indicators,
  fundamentalScore,
  technicalScore,
  aiConfidenceScore
}) => {
  const getMacdIcon = () => {
    switch (indicators.macd) {
      case "bullish":
        return <ArrowUpRight className="text-green-600" size={16} />;
      case "bearish":
        return <ArrowDownRight className="text-red-600" size={16} />;
      case "neutral":
        return <ArrowRight className="text-amber-600" size={16} />;
    }
  };
  
  const getStochasticIcon = () => {
    switch (indicators.stochastic) {
      case "overbought":
        return <ArrowUpRight className="text-red-600" size={16} />;
      case "oversold":
        return <ArrowDownRight className="text-green-600" size={16} />;
      case "neutral":
        return <ArrowRight className="text-amber-600" size={16} />;
    }
  };

  return (
    <div>
      <h3 className="text-sm font-medium mb-4">Technical Analysis</h3>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">RSI</span>
            <span className={`font-medium ${
              indicators.rsi > 70 ? "text-red-600" : 
              indicators.rsi < 30 ? "text-green-600" : 
              "text-amber-600"
            }`}>
              {indicators.rsi}
            </span>
          </div>
          <div className="mt-1 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full ${
                indicators.rsi > 70 ? "bg-red-500" : 
                indicators.rsi < 30 ? "bg-green-500" : 
                "bg-amber-500"
              }`} 
              style={{ width: `${indicators.rsi}%` }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>0</span>
            <span>100</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">MACD</span>
            <span className="flex items-center font-medium">
              {indicators.macd.charAt(0).toUpperCase() + indicators.macd.slice(1)}
              {getMacdIcon()}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Bollinger</span>
            <span className="font-medium">
              {indicators.bollingerBands === "upper" ? "Upper Band" :
               indicators.bollingerBands === "lower" ? "Lower Band" :
               "Middle Band"}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">VWAP</span>
            <span className={`font-medium ${
              indicators.vwap === "above" ? "text-green-600" : "text-red-600"
            }`}>
              {indicators.vwap === "above" ? "Above" : "Below"}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Stochastic</span>
            <span className="flex items-center font-medium">
              {indicators.stochastic.charAt(0).toUpperCase() + indicators.stochastic.slice(1)}
              {getStochasticIcon()}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-3">Confidence Scores</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">Technical Score</span>
              <span className="font-medium">{technicalScore}%</span>
            </div>
            <Progress value={technicalScore} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">Fundamental Score</span>
              <span className="font-medium">{fundamentalScore}%</span>
            </div>
            <Progress value={fundamentalScore} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">AI Confidence</span>
              <span className="font-medium">{aiConfidenceScore}%</span>
            </div>
            <Progress value={aiConfidenceScore} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalIndicators;
