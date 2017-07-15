import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', '$http', controller],
	controllerAs: '$ctrl'
};



export default navbarComponent;