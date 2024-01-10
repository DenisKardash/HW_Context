import { useContext } from 'react';
import { AppContext } from '../../context';

import { sortTodos } from '../../constants';

import styles from '../../app.module.css';

export const Header = ({ searchText, setSearchText, setTodos, requestAddTodo }) => {
	const { todos } = useContext(AppContext);

	return (
		<header className={styles.app}>
			<input
				className={styles.input}
				type="text"
				placeholder="Saerch by phrases..."
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
			<button className={styles.button} onClick={() => sortTodos(todos, setTodos)}>
				A ▼
			</button>
			<button className={styles.button} onClick={requestAddTodo}>
				+
			</button>
		</header>
	);
};
