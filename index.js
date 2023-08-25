// Initialize an array to store alarm list
let arr = [];

//---------------------------------------------

// Function to update the clock time every second
function updateClock() {
  const now = new Date(); // Get the current date and time
  const timeElement = document.getElementById('time'); // Get the element to display time
  timeElement.innerText = now.toLocaleTimeString(); // Update the displayed time
}

//----------------------------------------------

// Function to set an alarm
function setAlarm() {
  // Get values from input fields for the alarm hour, minute, second, and AM/PM selection
  const alarmHour = parseInt(document.getElementById('alarmHour').value);
  const alarmMinute = parseInt(document.getElementById('alarmMinute').value);
  const alarmSecond = parseInt(document.getElementById('alarmSecond').value);
  const amPm = document.getElementById('amPm').value;

  // Create a new Date object for the alarm time
  const alarmTime = new Date();
  alarmTime.setHours(alarmHour + (amPm === 'PM' && alarmHour !== 12 ? 12 : 0)); // Adjust for AM/PM
  alarmTime.setMinutes(alarmMinute);
  alarmTime.setSeconds(alarmSecond);

  // Get the alarm time in local time zone and convert it to a formatted string
  const strFormate = alarmTime.toLocaleTimeString().trim();

  const alarmsList = document.getElementById('alarms'); // Get the list of alarms
  const alarmItem = document.createElement('li'); // Create a new list item element
  alarmItem.classList.add('flex'); // Add a CSS class to the list item
  alarmItem.innerText = strFormate; // Set the content of the list item to the formatted alarm time

  const deleteButton = document.createElement('button'); // Create a delete button
  deleteButton.innerText = 'Delete'; // Set the button text
  deleteButton.onclick = function () { // Set the click event handler to delete the alarm
    deleteAlarm(alarmItem); 
  };

  alarmItem.appendChild(deleteButton); // Append the delete button to the list item

  // Check, the alarm time already exists or not.
  for(let i=0; i<arr.length; i++){
    if (arr[i].innerText.substring(0, 10) == alarmItem.innerText.substring(0, 10)) {
      alert("Alarm already Exist!");

      document.getElementById('alarmHour').value = '';
      document.getElementById('alarmMinute').value = '';
      document.getElementById('alarmSecond').value = '';
      return;
    }
  }

  alarmsList.appendChild(alarmItem); // Append the list item to the alarms list
  arr.push(alarmItem); // Append the list item to the arr also.

  // Clear the input fields after adding the alarm
  document.getElementById('alarmHour').value = '';
  document.getElementById('alarmMinute').value = '';
  document.getElementById('alarmSecond').value = '';
}

//------------------------------------------------

// Function to delete an alarm
function deleteAlarm(alarmItem) {
  const alarmsList = document.getElementById('alarms'); // Get the list of alarms
  alarmsList.removeChild(alarmItem); // Remove the specified list item from the alarms list

  const indexToRemove = arr.indexOf(alarmItem);
  if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1);
  }
}

// ----------------------------------------------

// This function plays a notification sound for the given alarmItem and shows a confirmation dialog.
function playNotificationSound(alarmItem) {
  
  var sound = document.getElementById('notificationSound');// Get the audio element with the ID 'notificationSound'
  
  sound.loop = true; // Set the audio to loop continuously
  
  // If the sound is paused, reset its current time to the beginning
  if (sound.paused) {
    sound.currentTime = 0;
  }
  
  sound.play(); // Play the notification sound

  // Set up an interval to display the confirmation dialog every 1 second
  var dialogInterval = setInterval(function() {
    // Show a confirmation dialog with a message
    var dialogResult = confirm('Alarm is going off! Do you want to stop the alarm?');

    // If the user confirms (clicks 'OK') on the dialog
    if (dialogResult) {

      sound.pause(); // Pause the notification sound

      deleteAlarm(alarmItem); // Delete the alarm to prevent it from alerting again

      clearInterval(dialogInterval); // Clear the interval to stop showing the confirmation dialog
    }
  }, 1000); // Check the dialog every 1 second
}

//-----------------------------------------------

// Function to check alarms and show alerts when an alarm goes off
function checkAlarms() {

  const now = new Date().toLocaleTimeString().trim(); // Get the current time as a string.

  //Match the current time from arr list items.
  for (let i = 0; i < arr.length; i++) {
    if (now == arr[i].innerText.substring(0, 10)) {
      playNotificationSound(arr[i]);
      arr.splice(i, 1); // Remove the alarm time from the array
      i--;
    }
  }

}

//---------------------------------------------

// Update the clock every second
setInterval(updateClock, 1000);

// Start checking alarms every second in arr
setInterval(checkAlarms, 1000);
