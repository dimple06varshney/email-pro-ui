const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: '1'},
        'task-2': { id: 'task-2', content: '2'},
        'task-3': { id: 'task-3', content: '3'},
        'task-4': { id: 'task-4', content: '4'}
    },
    column: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnsOrder: ['column-1']
}

export default initialData;