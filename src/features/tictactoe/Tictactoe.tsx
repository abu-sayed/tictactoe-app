import React from 'react';
import { useSelector } from 'react-redux';
import { selectTictactoe } from './tictactoe';
import styles from './Tictactoe.module.css';
import { Board } from './board/Board';
import { Turn } from './turn/Turn';
import { Result } from './result/Result';

export function Tictactoe() {
  const state = useSelector(selectTictactoe);
  return (
    <div>
      <Board />
      <Turn player={state.whoseTurn === 1 ? 'X' : 'O'} />
      <Result result={state.result} />
    </div>
  );
}
