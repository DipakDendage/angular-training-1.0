
function employeesController($scope, $rootScope) {

	var vm = this;
	vm.title = "Employees List";

	vm.employees = [
	    {id:1,name:'John', age:25, gender:'boy'},
	    {id:2,name:'Jessie', age:30, gender:'girl'},
	    {id:3,name:'Johanna', age:28, gender:'girl'},
	    {id:4,name:'Joy', age:15, gender:'girl'},
	    {id:5,name:'Mary', age:28, gender:'girl'},
	    {id:6,name:'Peter', age:95, gender:'boy'},
	    {id:7,name:'Sebastian', age:50, gender:'boy'},
	    {id:8,name:'Erika', age:27, gender:'girl'},
	    {id:9,name:'Patrick', age:40, gender:'boy'},
	    {id:10,name:'Samantha', age:60, gender:'girl'}
  	];

  	vm.deleteEmployee = function(index){
  			vm.employees.splice(index,1);
  	}
}

app.controller('employeesController', employeesController);