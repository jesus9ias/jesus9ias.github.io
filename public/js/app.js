
var main = angular.module("main",['ngAnimate','ui.router']);


main.directive('a',function(){
	return {
		restrict: 'E',
		link: function(scope, elem, attrs){
			if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	};
});


main.service('globalx',['$http','$q',function($http,$q){

	this.ajax = function(url,post){
		var deferred = $q.defer();
		$http.post(url,post)
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data);
			});
		return deferred.promise;
	};

}]);