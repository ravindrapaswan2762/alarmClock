// Initialize an array to store alarm list
let arr = [];

//---------------------------------------------

// Function to update the clock time every second
function updateClock() {
  const now = new Date();  
  const timeElement = document.getElementById('time'); // Get the element to display time
  timeElement.innerText = now.toLocaleTimeString(); // Update the displayed time
}

//----------------------------------------------

// Function to set an alarm
function setAlarm() {
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

//-----------------------------------------------

// Function to check alarms and show alerts when an alarm goes off
function checkAlarms() {

  const now = new Date().toLocaleTimeString().trim(); // Get the current time as a string.

  //Match the current time from arr list items.
  for (let i = 0; i < arr.length; i++) {
    if (now == arr[i].innerText.substring(0, 10)) {
      alert('Alarm is going off!'); // Show an alert if the alarm time matches the current time
      deleteAlarm(arr[i]); // Delete the alarm so it won't alert again
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
