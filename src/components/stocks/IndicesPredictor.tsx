
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Clock } from "lucide-react";

interface IndicesPredictorProps {
  nifty: {
    value: number;
    change: number;
    changePercentage: number;
    prediction?: {
      direction: "buy" | "sell" | "hold";
      entryPoint: number;
      targetPoint: number;
      stopLoss: number;
      bestTimeToTrade: string;
      confidenceScore: number;
    };
  };
  bankNifty: {
    value: number;
    change: number;
    changePercentage: number;
    prediction?: {
      direction: "buy" | "sell" | "hold";
      entryPoint: number;
      targetPoint: number;
      stopLoss: number;
      bestTimeToTrade: string;
      confidenceScore: number;
    };
  };
}

const IndicesPredictor: React.FC<IndicesPredictorProps> = ({
  nifty,
  bankNifty
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Intraday Indices Predictor</h2>
      <p className="text-muted-foreground mb-6">
        AI-powered predictions for the best entry and exit points for major indices
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>NIFTY 50</CardTitle>
                <CardDescription>Intraday prediction</CardDescription>
              </div>
              <Badge 
                variant="outline"
                className={
                  nifty.prediction?.direction === "buy" 
                    ? "bg-green-50 text-green-700 border-green-200" 
                    : nifty.prediction?.direction === "sell"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }
              >
                {(nifty.prediction?.direction || "HOLD").toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {nifty.prediction && (
              <>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Entry Point</span>
                    <p className="text-xl font-bold">{nifty.prediction.entryPoint.toLocaleString()}</p>
                  </div>
                  <ArrowRight className="hidden sm:block text-muted-foreground" />
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Target</span>
                    <p className="text-xl font-bold">{nifty.prediction.targetPoint.toLocaleString()}</p>
                  </div>
                  <ArrowRight className="hidden sm:block text-muted-foreground" />
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Stop Loss</span>
                    <p className="text-xl font-bold">{nifty.prediction.stopLoss.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center gap-4 mb-6 border rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span className="text-sm font-medium">Best Time to Trade</span>
                  </div>
                  <div className="text-sm font-bold">{nifty.prediction.bestTimeToTrade}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">AI Confidence</span>
                    <span>{nifty.prediction.confidenceScore}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        nifty.prediction.confidenceScore > 80 
                          ? "bg-green-500" 
                          : nifty.prediction.confidenceScore > 60 
                          ? "bg-amber-500" 
                          : "bg-red-500"
                      }`} 
                      style={{ width: `${nifty.prediction.confidenceScore}%` }}
                    />
                  </div>
                </div>
                
                <Button className="w-full">View Detailed Analysis</Button>
              </>
            )}
            
            {!nifty.prediction && (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">No prediction available yet</p>
                <Button>Generate Prediction</Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>BANK NIFTY</CardTitle>
                <CardDescription>Intraday prediction</CardDescription>
              </div>
              <Badge 
                variant="outline"
                className={
                  bankNifty.prediction?.direction === "buy" 
                    ? "bg-green-50 text-green-700 border-green-200" 
                    : bankNifty.prediction?.direction === "sell"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }
              >
                {(bankNifty.prediction?.direction || "HOLD").toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {bankNifty.prediction && (
              <>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Entry Point</span>
                    <p className="text-xl font-bold">{bankNifty.prediction.entryPoint.toLocaleString()}</p>
                  </div>
                  <ArrowRight className="hidden sm:block text-muted-foreground" />
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Target</span>
                    <p className="text-xl font-bold">{bankNifty.prediction.targetPoint.toLocaleString()}</p>
                  </div>
                  <ArrowRight className="hidden sm:block text-muted-foreground" />
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Stop Loss</span>
                    <p className="text-xl font-bold">{bankNifty.prediction.stopLoss.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center gap-4 mb-6 border rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span className="text-sm font-medium">Best Time to Trade</span>
                  </div>
                  <div className="text-sm font-bold">{bankNifty.prediction.bestTimeToTrade}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">AI Confidence</span>
                    <span>{bankNifty.prediction.confidenceScore}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        bankNifty.prediction.confidenceScore > 80 
                          ? "bg-green-500" 
                          : bankNifty.prediction.confidenceScore > 60 
                          ? "bg-amber-500" 
                          : "bg-red-500"
                      }`} 
                      style={{ width: `${bankNifty.prediction.confidenceScore}%` }}
                    />
                  </div>
                </div>
                
                <Button className="w-full">View Detailed Analysis</Button>
              </>
            )}
            
            {!bankNifty.prediction && (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">No prediction available yet</p>
                <Button>Generate Prediction</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndicesPredictor;
