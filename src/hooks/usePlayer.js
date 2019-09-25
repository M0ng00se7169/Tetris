import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });
  
  const rotate = (matrix, dir) => {
    // Make the rows to become new cols (Transpose)
    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index])
    );
    // Reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
  }

  const playerRotate = (stage, dir) => {
    const clonedPLayer = JSON.parse(JSON.stringify(player));
    clonedPLayer.tetromino = rotate(clonedPLayer.tetromino, dir);

    const pos = clonedPLayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPLayer, stage, { x: 0, y: 0})) {
      clonedPLayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPLayer.tetromino[0].length) {
        rotate(clonedPLayer.tetromino, -dir);
        clonedPLayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPLayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
      tetromino: randomTetromino().shape,
      collided: false
    })
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
