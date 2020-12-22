import React from 'react';
import styles from './Box.module.css';

interface Props {
	value: string,
	disabled: boolean,
	onClick: () => void,
}

export function Box({
	value,
	disabled,
	onClick = () => {},
}: Props) {
	return (
		<button
			className={styles.button}
			aria-label="1"
			onClick={() => onClick()}
			disabled={disabled}
		>
			{value}
		</button>
	);
}