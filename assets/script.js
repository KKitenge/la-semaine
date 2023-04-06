  
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  $('#currentDay').text(today);
  console.log(today)

$(document).ready(function () { 
  // var currentTime = moment().hours();
  var currentTime = $.now();
  $("#time-block").each(function(){
  var currentBlock = parseInt($(this).attr("id").split(",")[1]);
  
  // Check if time block is in past, present, or future
  if(currentBlock < currentTime){
    $(this).addClass("past");
  } 
  else if(currentBlock === currentTime){
    $(this).addClass("present");
  } 
  else{
    $(this).addClass("future");
  }
  console.log(currentTime)
 });
});
  
// Add click listener to each time block
  $(".time-block").on("click", function(){
  // Get the id of the time block
  currentBlock = $(this).attr("id").split(",")[1];
  // Get the saved event for this time block
  var savedEvent = localStorage.getItem(currentBlock);
  // Set the value of the event text area to the saved event
  $("textarea").val(savedEvent);
  });

  $("#saveBtn").on("click", function(){ 
    // Get user input
    var userInput = $("#user_input").val();
    // Save user input in local storage
    localStorage.setItem("userInput", userInput);
  });
  

// Create additional time blocks
function createTimeBlocks(startTime, endTime){
  var startTime = 9;
  var endTime = 17;
  for(var i = startTime; i <= endTime; i++){
  // Create new time block
  var newBlock = document.createElement("div");
  newBlock.className = "time-b";
  newBlock.id = "#time-block" + i;
  // Append time block to container
  document.getElementById("time-container").appendChild(newBlock);
  // Add event field to time block
  var blockEvent = document.createElement("description");
  blockEvent.className = "event";
  newBlock.appendChild(blockEvent);
  }
};