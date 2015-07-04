(function(){
	var submitButtonClicked = function(){
		var personsName = $('#name').val();
		(function alertFunction(){
			alert(personsName);
		})();
	};
	$('#submitButton').click(function(){
		submitButtonClicked();
	});
})();