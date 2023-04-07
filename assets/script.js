
  //code will not run until the DOM is ready for js execution
$(function () { 
  
  //Using JQuery select all elements on the page with the element time black
  $(".time-block").each(function() {
    console.log("this")
    var elementTimeBlock = $(this).attr("id").split("-")[1];
    console.log(elementTimeBlock);
    var todaysTime = dayjs().format('H');
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

    // TODO: Add a listener for click events on the save button and save data to localstorage.
    $(".saveBtn").on("click", function(event){
      event.preventDefault();       
      var element = $(this); // this is going to be the button clicked
      var userInput = element.siblings("textarea").val(); // value typed in by user
      console.log(userInput);
      var hour = element.parent().attr("id"); // hour-#
      console.log(hour);
      localStorage.setItem(hour, userInput);

  });
  
  
  // TODO: Add code to display the current date in the header of the page.
    var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text(today);
    // console.log(today)
 });

 // This function gets the data out of local storage and displays it on the page
    function displayLocalStorage(){
    $(".time-block").each(function() {
    var blockHour = $(this).attr("id");
    console.log(blockHour)
    var userInput = localStorage.getItem(blockHour);
    $(this).children("textarea").val(userInput);
  });
}

displayLocalStorage();