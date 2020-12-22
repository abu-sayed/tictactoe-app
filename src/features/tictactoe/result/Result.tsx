import React from 'react';
import styles from './Result.module.css';

interface Props {
	result: number,
}

export function Result({ result }: Props) {
    let status = '';
    switch(result) {
        case -1:
            status = 'Game is in progress';
            break;
        case 0:
            status = 'Tie';
            break;
        case 1:
            status = 'Player X won';
            break;
        case 2: 
            status = 'Player O won';
            break;
        default:
            status = 'Unknown';
    }
	return (
		<div>
            Result: {status}
        </div>
	);
}