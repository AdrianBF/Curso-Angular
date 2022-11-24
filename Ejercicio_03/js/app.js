(function(){

let = app = angular.module('universidadApp', [] );

app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.listado = ['Fernando Herrera','Melissa Flores', 'Juan Carlos Pineda',"Maria Perez"]

    $scope.listadoProfesores = {
        profesores: [{
            nombre: "Fernando Herrera",
            edad: 29,
            clase: "PEE"
        },{
            nombre: "Melissa Flores",
            edad: 24,
            clase: "Mates"
        },{
            nombre: "Adrian Barrero",
            edad: 23,
            clase: "Programacion"
        }]
    }

}]);


})();

let profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}