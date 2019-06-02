$(document).ready(function(){

	 $('#register').submit(function(event){
	 	// $('#lform').hide();
	 	event.preventDefault();

	 	var myFormData = {
	 		username: $('#username').val(),
	 		password: $('#password').val(),
	 		address:$('#address').val()
		 } 
		 console.log(myFormData);

	 	
$.ajax({
//v1 is the version and users is the route in api.
	url:'http://localhost:3001/v1/users',
	method:'POST',
	contentType:'application/json',
	data:JSON.stringify(myFormData),

	sucess:function(result,status){
		console.log(result);
		console.log(status);
		$('#message').html(result.message)
		$('#rform').hide();
		$('#lform').show()

	},

	error:function(jqXHR,status){
		console.log(jqXHR.responseJSON.message);

	}
})

	 })




})   