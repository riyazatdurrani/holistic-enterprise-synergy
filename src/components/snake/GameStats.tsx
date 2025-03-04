
import React from 'react';
import { Trophy } from 'lucide-react';

interface GameStatsProps {
  score: number;
  highScore: number;
}

const GameStats: React.FC<GameStatsProps> = ({ score, highScore }) => {
  return (
    <div className="flex w-full justify-between px-4">
      <div className="bg-primary/10 rounded-lg p-3 text-center">
        <p className="text-sm font-medium text-muted-foreground">Score</p>
        <p className="text-2xl font-bold">{score}</p>
      </div>
      
      <div className="bg-amber-500/10 rounded-lg p-3 text-center">
        <p className="text-sm font-medium text-muted-foreground flex items-center justify-center">
          <Trophy className="h-4 w-4 mr-1 text-amber-500" />
          High Score
        </p>
        <p className="text-2xl font-bold">{highScore}</p>
      </div>
    </div>
  );
};

export default GameStats;
