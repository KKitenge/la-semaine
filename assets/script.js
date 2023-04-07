
  //code will not run until the DOM is ready for js execution
$(function () { 
    
  //This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //$(".description")
  //var userInput = $(".description").localStorage.setItem("userInput", userInput);
   
  // TODO: Add a listener for click events on the save button.
    // $(".saveBtn").on("click", function(){ 
    //   console.log("this")

      $(".description").each(function() {
      console.log('happy')

      var userInput = $(this).attr("class");
      // localStorage.setItem("userInputStringify", JSON.stringify(userInput));
      // localStorage.setItem("userInput", userInput);
      console.log(userInput)

  });
  

  // TODO: Add code to display the current date in the header of the page.
    var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text(today);
    // console.log(today)
 });
