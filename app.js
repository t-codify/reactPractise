const heading = React.createElement('div', { id: 'parent', xyz: 'abc' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', {}, 'header1'),
		React.createElement('h2', {}, 'header1'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'header3'),
		React.createElement('h2', {}, 'header4'),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
