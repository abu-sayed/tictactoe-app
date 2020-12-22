import React from 'react';
import styles from './Turn.module.css';

interface Props {
	player: string,
}

export function Turn({ player }: Props) {
	return (
		<div>
            Turn: Player {player}
        </div>
	);
}