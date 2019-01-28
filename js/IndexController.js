console.log('top of indexcontroller file');

if ('serviceWorker' in navigator) {
console.log('inside if');	
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}