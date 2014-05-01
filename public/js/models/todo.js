Todos.Todo =  DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

//Lets load some fixture data
Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn ember.js',
		isCompleted: true
	},
	{
		id:2,
		title: 'probaby some stuff...',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Profit',
		isCompleted: true
	},
	{
		id: 4,
		title: '....',
		isCompleted: false
	}
];