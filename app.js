(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController ($scope){
	$scope.textItem ="";
	$scope.buttonItem;
	$scope.messageItem ="";

	$scope.displayMessage = function(){
		var totalValue = calculateTotalNumber($scope.textItem);
		if (totalValue == 0)
			$scope.messageItem = "Please enter data first!";
		if ((totalValue > 0) && (totalValue < 4) )
			$scope.messageItem ="Enjoy!";
		if (totalValue > 3)
			$scope.messageItem = "Too much!";
	};

	function calculateTotalNumber(str){
		var totalLength = 0;
		totalLength = str.split(',').length;
		if (str.length == 0)
			totalLength = 0;
		return totalLength;
	};
}

})();