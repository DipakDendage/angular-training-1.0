
function employeesController($scope, $rootScope,$state, empService) {

	var vm = this;
	vm.title = "Employees List";

	console.log($state.current.data.title);

	var success = function(response){
		vm.employees = response.data;
	};


	var deletedRecord = function(response){
		empService.getEmployees().then(success, error)
	};

	var error = function(response){
		console.log("in error");
		console.log(response)
	};

	empService.getEmployees().then(success, error);
	
  	vm.deleteEmployee = function(id){
  		empService.deleteEmployee(id).then(deletedRecord, error);
  	}

  	vm.addNew = function(obj){
  		if(obj && obj.id){
  			$state.go('employee', {id: obj.id})
  		} else{
  			$state.go('employee/add')
  		}
  	}
}

app.controller('employeesController', employeesController);