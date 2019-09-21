import { useState } from 'react';
import { createState } from '../gameHelpers';

export const useStage = () => {
  const [stage, setStage] = useState(createState());

  return [stage, setStage];
}