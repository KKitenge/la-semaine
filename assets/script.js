
  //code will not run until the DOM is ready for js execution
$(function () { 
  
  //Using JQuery select all elements on the page with the element time black
  $(".time-block").each(function() {
    console.log("this")
    var elementTimeBlock = $(this).attr("id").split("-")[1];
    console.log(elementTimeBlock);
    var todaysTime = dayjs().format('h');
    console.log(todaysTime);
  //compare current timeblock to today's time and add attribute for class for colors
      //if less than, class of past, if equal class of present, if greater, future
      if (elementTimeBlock < todaysTime){
        $(this).addClass("past");
      } else if (elementTimeBlock === todaysTime) {
        $(this).addClass("present");
      } else $(this).addClass("future");
      console.log(todaysTime)
  });

    // TODO: Add a listener for click events on the save button.
    $(".saveBtn").on("click", function(){       
      var element = $(this); // this is going to be the button clicked
      var userInput = element.siblings("textarea").val(); // value typed in by user
      console.log(userInput);
      var hour = element.parent().attr("id"); // hour-#
      console.log(hour);
      // var savedInfo = [userInput, hour];
      // localStorage.setItem("savedInfo", JSON.stringify(savedInfo));
      // localStorage.setItem("userInput", savedInfo);
      // localStorage.setItem("ArrayStringify", JSON.stringify(["userInput", 1,2]));
	    // localStorage.setItem("Array", ["userInput", 1,2]);  
      
      var enteredTime = $(this).parent().attr('id');
      var textarea = $(this).siblings('textarea').val();
      localStorage.setItem(enteredTime, textarea);
      $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
      $('#hour-10 textarea').val(localStorage.getItem('hour-10'));
      $('#hour-11 textarea').val(localStorage.getItem('hour-11'));
      $('#hour-12 textarea').val(localStorage.getItem('hour-12'));
     

  });
  
 

  // TODO: Add code to display the current date in the header of the page.
    var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text(today);
    // console.log(today)
 });
