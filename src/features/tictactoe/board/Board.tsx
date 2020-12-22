import React from 'react';
import styles from './Board.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	playAsync,
	selectTictactoe,
} from '../tictactoe';
import { Box } from '../box/Box';

export function Board() {
	const state = useSelector(selectTictactoe);
	const dispatch = useDispatch();
	return (
		<div style={{ display: 'flex' }}>
			{state.board.map((row, rowIndex) => {
				return (
					<div>
						{row.map((column, columnIndex) => {
							const value = state.board[rowIndex][columnIndex];
							return (
								<div style={{ padding: '2px' }}>
									<Box
										value={value}
										disabled={state.isGameOver || value === 'X' || value === 'O'}
										onClick={() => dispatch(playAsync(rowIndex, columnIndex))}
									/>
								</div>
							);
						})}
					</div>
				)
			})}
		</div>
	);
}