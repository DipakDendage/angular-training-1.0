function employeeService($http,$stateParams ) {
	this.getEmployees = function(){
		return $http.get("http://localhost/demoProject/blog/public/employee").then(function(response){
				return response;
		})
	}

	this.deleteEmployee = function(id){
		return $http.delete("http://localhost/demoProject/blog/public/employee/"+id).then(function(response){
			return response;
		})
	}

	this.createEmployee = function(data){
		return $http.post("http://localhost/demoProject/blog/public/employee", data).then(function(response){
			return response;
		})
	}

	this.updateEmployee = function(id,data){
		return $http.put("http://localhost/demoProject/blog/public/employee/"+id, data).then(function(response){
			return response;
		})
	}

	this.getEmployee = function(id){
		return $http.get("http://localhost/demoProject/blog/public/getEmployee/"+$stateParams.id).then(function(response){
			return response;
		});
	}
}



app.service('empService', employeeService);