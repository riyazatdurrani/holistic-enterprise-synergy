
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';

type GameStatus = 'READY' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface GameControlsProps {
  gameStatus: GameStatus;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  onDirectionChange: (direction: Direction) => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameStatus,
  startGame,
  pauseGame,
  resumeGame,
  onDirectionChange
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-2 mb-4">
        {gameStatus === 'PLAYING' ? (
          <Button variant="outline" onClick={pauseGame}>
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
        ) : gameStatus === 'PAUSED' ? (
          <Button variant="outline" onClick={resumeGame}>
            <Play className="mr-2 h-4 w-4" />
            Resume
          </Button>
        ) : null}
        
        {gameStatus !== 'READY' && (
          <Button variant="outline" onClick={startGame}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Restart
          </Button>
        )}
      </div>
      
      <div className="flex flex-col items-center gap-2 sm:hidden">
        <Button 
          variant="ghost" 
          className="p-2 h-12 w-12" 
          onClick={() => onDirectionChange('UP')}
          disabled={gameStatus !== 'PLAYING'}
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
        
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            className="p-2 h-12 w-12" 
            onClick={() => onDirectionChange('LEFT')}
            disabled={gameStatus !== 'PLAYING'}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="p-2 h-12 w-12" 
            onClick={() => onDirectionChange('DOWN')}
            disabled={gameStatus !== 'PLAYING'}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="p-2 h-12 w-12" 
            onClick={() => onDirectionChange('RIGHT')}
            disabled={gameStatus !== 'PLAYING'}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p className="hidden sm:block">Use arrow keys to control the snake</p>
        <p className="sm:hidden">Use on-screen controls or swipe to move</p>
      </div>
    </div>
  );
};

export default GameControls;
