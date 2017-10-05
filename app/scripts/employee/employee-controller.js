
function employeeController($scope, $state,$stateParams,empService) {

	var vm = this;
	vm.title = "Employee Details";
	vm.employee = {};

	

	var getData = function(response){
		vm.employee = response.data;
	};

	var error = function(response){
		console.log(response)
	};

	var recordCreated = function(response){
		$state.go('employees');
	};

	vm.saveEmployee = function(){
		if(vm.employee.id){
			empService.updateEmployee(vm.employee.id, vm.employee).then(recordCreated, error);
		}else{
			empService.createEmployee(vm.employee).then(recordCreated, error);
		}		
	}

  	vm.genders = [{id:1,gender: 'boy'}, {id:2, gender:'girl'}, {id:3, gender:'Others'},{id:4, gender:'F'},{id:5, gender:'M'}];

	if($stateParams && $stateParams.id){
		empService.getEmployee($stateParams.id).then(getData, error)
	}

	vm.cancel = function(){
		$state.go('employees');
	}
}

app.controller('employeeController', employeeController);