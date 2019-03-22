downX = 0;
downY = 0;

$("#gestureArea")
	.mouseup(function() {
         $("#gestureResult").text("Mouse Up");
         upX = event.pageX;
         upY = event.pageY;
                          
         if (upX < downX) {
               $("#gestureResult").text("Swipe Left");
         }
         else if (upX > downX){
               $("#gestureResult").text("Swipe Right");
         }
         else if (upX == downX){
               $("#gestureResult").text("Mouse Up");
         }

    })
						  
	.mousedown(function() {
         $("#gestureResult").text("Mouse Down");
               downX = event.pageX;
               downY = event.pageY;
});