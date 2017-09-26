
function employeeController($scope, $state,$stateParams) {

	var vm = this;
	vm.title = "Employee Details";
	vm.employee = {};

	vm.saveEmployee = function(){
		console.log("inside save");
		console.log(vm.employee);
	}

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

  	vm.genders = [{id:1,gender: 'boy'}, {id:2, gender:'girl'}, {id:3, gender:'Others'}];

	if($stateParams && $stateParams.id){
		angular.forEach(vm.employees, function(value, key){
				if(value.id == $stateParams.id){
					vm.employee = value;
					console.log(vm.employee)
				}
		});
	}

	vm.cancel = function(){
		$state.go('employees');
	}
}

app.controller('employeeController', employeeController);