export const sortTodos = (todos, setTodos) => {
	const sortedTodos = [...todos].sort((a, b) => a.content.localeCompare(b.content));
	return setTodos(sortedTodos);
};

export const searchTodos = (todos, searchText) => {
	const filteredTodos = [...todos].filter((todo) => todo.content.includes(searchText));
	return filteredTodos;
};
