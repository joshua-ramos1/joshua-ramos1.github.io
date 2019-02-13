$(document).ready(function() { // do this when the document is loaded
	$("#dialerid").show(); // show the element with ID "element"
	$("#contact_listid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
	$("#help_id").hide();
});
$("#dialerButton").click(function() { // when "button_id" is clicked
	$("#dialerid").show(); // show the element with ID "element"
	$("#contact_listid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
	$("#help_id").hide();
});
$("#listButton").click(function() { // when "button_id" is clicked
	$("#contact_listid").show(); // show the element with ID "element"
	$("#dialerid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
	$("#help_id").hide();
});
$("#AddContButton").click(function() { // when "button_id" is clicked
	$("#add_contactid").show(); // show the element with ID "element"
	$("#dialerid").hide(); // hide the element with ID "otherElement"
	$("#contact_listid").hide();
	$("#help_id").hide();
});
$("#helpButton").click(function() { // when "button_id" is clicked
	$("#help_id").show();
	$("#add_contactid").hide(); // show the element with ID "element"
	$("#dialerid").hide(); // hide the element with ID "otherElement"
	$("#contact_listid").hide();
});

$("#phoneclear").click(function() { // when "button_id" is clicked
	$("#inputnumber").val('');
});
$("#phonedial").click(function() { // when "button_id" is clicked
	if ($("#inputnumber").val().length==12){
		$("#inputnumber").val("Calling...");
	}
	else{
		$("#inputnumber").val("This is not a valid number");
	}
});
$(".phonebutton").click(function() { // when "button_id" is clicked
	if ($("#inputnumber").val()=="Calling..."||$("#inputnumber").val()=="This is not a valid number"){
		$("#inputnumber").val('');
	}
	var number = $("#inputnumber").val();
	if ($("#inputnumber").val().length<12){
		var num = this.innerText;
		if ($("#inputnumber").val().length==3 || $("#inputnumber").val().length==7){
			number+='-'
			number+= num
		}
		else {
			number+= num
		}
	}
	else{
		
	}
	$("#inputnumber").val(number);
});
