import React from 'react';
import { AppContext } from './context';
import { useState } from 'react';
import { searchTodos } from './constants';

import { Header } from './components/header/header';
import styles from './app.module.css';

import {
	useRequestGetTodos,
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestUpdateTodo,
} from './hooks';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [searchText, setSearchText] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoading, todos, setTodos } = useRequestGetTodos(refreshTodosFlag);
	const { requestAddTodo } = useRequestAddTodo(refreshTodos);
	const { requestDeleteTodo } = useRequestDeleteTodo(refreshTodos);
	const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);

	return (
		<AppContext.Provider value={useRequestGetTodos()}>
			<Header
				searchText={searchText}
				setSearchText={setSearchText}
				setTodos={setTodos}
				requestAddTodo={requestAddTodo}
			/>
			<div className={styles.app}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					searchTodos(todos, searchText).map(({ id, content }) => (
						<div key={id} className={styles.list}>
							<div>{content}</div>
							<button
								className={styles.button}
								onClick={() => requestUpdateTodo(id, content)}
							>
								Change
							</button>
							<button className={styles.delButton} onClick={() => requestDeleteTodo(id)}>
								Delete
							</button>
						</div>
					))
				)}
			</div>
		</AppContext.Provider>
	);
};
