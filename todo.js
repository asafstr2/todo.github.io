
$( "ul" ).on( "click","li", function() {
 $( this ).toggleClass("completed");
});


$( "ul" ).on( "click","span", function(event) {
 $( this ).parent().fadeOut(500,function(){$( this ).remove();})	
 event.stopPropagation();
});


$( "input[type='text']" ).on( "keypress", function(event) {
  var mid="\s";
  if (event.which===13){
  	mid='   ' +( $(this).val());
  	$(this).val("");
  	
  	 $("ul").append( "<li>"+'   '+mid+'   '+"<span><i class='fa fa-trash'></i></span></li>");
  }
});

$( "h1 i" ).on( "click", function() {
 $( "input[type='text']" ).fadeToggle(200,function(){$( this );})	

 });
