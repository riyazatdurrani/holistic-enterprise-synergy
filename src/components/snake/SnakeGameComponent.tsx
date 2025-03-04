
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trophy, 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import GameControls from './GameControls';
import GameStats from './GameStats';

// Define types
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };
type GameStatus = 'READY' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';

// Game constants
const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;
const MIN_SPEED = 50;

const SnakeGameComponent = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [nextDirection, setNextDirection] = useState<Direction>('RIGHT');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>('READY');
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const gameLoopRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  // Load high score from localStorage on mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  // Save high score to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('snakeHighScore', highScore.toString());
  }, [highScore]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'PLAYING') return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setNextDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setNextDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setNextDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setNextDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStatus, direction]);

  // Generate random food position
  const generateFood = useCallback((): Position => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };

    // Check if food is on snake body
    const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    
    if (isOnSnake) {
      return generateFood(); // Try again
    }
    
    return newFood;
  }, [snake]);

  // Check if snake collided with itself or walls
  const checkCollision = useCallback((head: Position): boolean => {
    // Check wall collision
    if (
      head.x < 0 || 
      head.x >= GRID_SIZE || 
      head.y < 0 || 
      head.y >= GRID_SIZE
    ) {
      return true;
    }

    // Check self collision (skip the last element which is the tail and will move)
    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }

    return false;
  }, [snake]);

  // Move the snake
  const moveSnake = useCallback(() => {
    setDirection(nextDirection);
    
    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };
      
      // Update head position based on direction
      switch (nextDirection) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        default:
          break;
      }

      // Check collision
      if (checkCollision(head)) {
        setGameStatus('GAME_OVER');
        
        // Update high score if current score is higher
        if (score > highScore) {
          setHighScore(score);
          toast({
            title: "New High Score!",
            description: `Congratulations! You set a new high score of ${score}!`,
          });
        }
        
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];
      
      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        setScore(prevScore => prevScore + 10);
        setFood(generateFood());
        
        // Increase speed
        if (speed > MIN_SPEED) {
          setSpeed(prevSpeed => Math.max(prevSpeed - SPEED_INCREMENT, MIN_SPEED));
        }
      } else {
        // Remove tail if didn't eat food
        newSnake.pop();
      }

      return newSnake;
    });
  }, [nextDirection, checkCollision, food, generateFood, score, highScore, speed, toast]);

  // Game loop
  useEffect(() => {
    const runGameLoop = () => {
      if (gameStatus === 'PLAYING') {
        moveSnake();
      }
    };

    if (gameStatus === 'PLAYING') {
      // Clear any existing interval
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
      
      // Start a new interval
      gameLoopRef.current = window.setInterval(runGameLoop, speed);
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameStatus, moveSnake, speed]);

  // Draw the game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate cell size
    const cellSize = canvas.width / GRID_SIZE;

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#4f46e5' : '#6366f1'; // Head different color
      ctx.fillRect(
        segment.x * cellSize, 
        segment.y * cellSize, 
        cellSize, 
        cellSize
      );
      ctx.strokeStyle = '#fff';
      ctx.strokeRect(
        segment.x * cellSize, 
        segment.y * cellSize, 
        cellSize, 
        cellSize
      );
    });

    // Draw food
    const gradient = ctx.createRadialGradient(
      (food.x * cellSize) + (cellSize / 2),
      (food.y * cellSize) + (cellSize / 2),
      cellSize / 10,
      (food.x * cellSize) + (cellSize / 2),
      (food.y * cellSize) + (cellSize / 2),
      cellSize / 2
    );
    gradient.addColorStop(0, '#f43f5e');
    gradient.addColorStop(1, '#e11d48');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(
      (food.x * cellSize) + (cellSize / 2),
      (food.y * cellSize) + (cellSize / 2),
      cellSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, food]);

  // Start a new game
  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setNextDirection('RIGHT');
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setFood(generateFood());
    setGameStatus('PLAYING');
  };

  // Pause the game
  const pauseGame = () => {
    setGameStatus('PAUSED');
  };

  // Resume the game
  const resumeGame = () => {
    setGameStatus('PLAYING');
  };

  // Handle direction change from button controls
  const handleDirectionChange = (newDirection: Direction) => {
    if (gameStatus !== 'PLAYING') return;
    
    switch (newDirection) {
      case 'UP':
        if (direction !== 'DOWN') setNextDirection('UP');
        break;
      case 'DOWN':
        if (direction !== 'UP') setNextDirection('DOWN');
        break;
      case 'LEFT':
        if (direction !== 'RIGHT') setNextDirection('LEFT');
        break;
      case 'RIGHT':
        if (direction !== 'LEFT') setNextDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-lg animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {gameStatus === 'GAME_OVER' ? 'Game Over!' : 'Snake Game'}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col items-center gap-6">
        <GameStats score={score} highScore={highScore} />
        
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className={cn(
              "border-2 border-primary rounded-lg shadow-md bg-black/5",
              gameStatus === 'GAME_OVER' && "opacity-60"
            )}
          />
          
          {gameStatus === 'READY' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg" 
                className="text-lg font-bold px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-700" 
                onClick={startGame}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Game
              </Button>
            </div>
          )}
          
          {gameStatus === 'GAME_OVER' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 rounded-lg">
              <h2 className="text-2xl font-bold text-white">Game Over!</h2>
              <p className="text-xl text-white mb-2">Your Score: {score}</p>
              <Button 
                size="lg" 
                className="text-lg font-bold px-8 py-6" 
                onClick={startGame}
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Play Again
              </Button>
            </div>
          )}
        </div>
        
        <GameControls 
          gameStatus={gameStatus}
          startGame={startGame}
          pauseGame={pauseGame}
          resumeGame={resumeGame}
          onDirectionChange={handleDirectionChange}
        />
      </CardContent>
    </Card>
  );
};

export default SnakeGameComponent;
