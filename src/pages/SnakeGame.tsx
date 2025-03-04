
import React from 'react';
import { Helmet } from 'react-helmet';
import SnakeGameComponent from '@/components/snake/SnakeGameComponent';

const SnakeGame = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Snake Game | ERP System</title>
      </Helmet>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Snake Game</h1>
        <p className="text-muted-foreground">Take a break and enjoy a game of snake!</p>
      </div>
      
      <div className="flex justify-center">
        <SnakeGameComponent />
      </div>
    </div>
  );
};

export default SnakeGame;
