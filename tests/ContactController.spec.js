describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	it('should display the names and phone numbers', function () {
		var $scope = {};
		$controller('ContactController as vm', {$scope: $scope});
		expect($scope.vm.contacts).not.toBe(undefined)
	});
});
