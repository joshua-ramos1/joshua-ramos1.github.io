$(document).ready(function() { // do this when the document is loaded
	$("#dialerid").show(); // show the element with ID "element"
	$("#contact_listid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
});
$("#dialerButton").click(function() { // when "button_id" is clicked
	$("#dialerid").show(); // show the element with ID "element"
	$("#contact_listid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
});
$("#listButton").click(function() { // when "button_id" is clicked
	$("#contact_listid").show(); // show the element with ID "element"
	$("#dialerid").hide(); // hide the element with ID "otherElement"
	$("#add_contactid").hide();
});
$("#AddContButton").click(function() { // when "button_id" is clicked
	$("#add_contactid").show(); // show the element with ID "element"
	$("#dialerid").hide(); // hide the element with ID "otherElement"
	$("#contact_listid").hide();
});