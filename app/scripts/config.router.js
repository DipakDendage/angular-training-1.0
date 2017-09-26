app.run(function($rootScope, $state){
  $rootScope.$state = $state;
});

app.config(function($stateProvider, $urlRouterProvider) {


  var employees = {
    name: 'employees',
    url: '/employees',
    templateUrl: 'views/employee/employees-list.html',
    data: {
        title: 'Employees List',
    },
    controller:'employeesController',
    controllerAs: 'emp'
  }
  var employee = {
    name: 'employee/add',
    url: '/employee/add',
    templateUrl: 'views/employee/employee-add-edit.html',
    data: {
        title: 'Employee',
    }
  }

  var employeeEdit = {
    name: 'employee',
    url: '/employee/:id',
    templateUrl: 'views/employee/employee-add-edit.html',
    data: {
        title: 'Employee',
    }
  }

  $urlRouterProvider.otherwise('/employees');
  $stateProvider.state(employees);
  $stateProvider.state(employee);
  $stateProvider.state(employeeEdit);
});