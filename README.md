<img src="https://github.com/ravindrapaswan2762/alarmClock/blob/master/Screenshot00">


# Alarm Clock Web Application
This is a simple web application that allows us to set alarms, view the list of alarms, and delete alarms. The application features a clock face that displays the current time, and it provides a user-friendly interface for managing alarms.

# Features
### Clock Face
* The clock face prominently displays the current time, updating every second to accurately reflect the passage of time.

### Set Alarm
* The application enables users to set alarms by specifying the hour, minute, and second along with an AM/PM designation.
* Once the desired time is entered, clicking the "Set Alarm" button will add the alarm to the list below.

### Alarms List
* All the alarms set by the user are listed below the clock face.
* Each alarm entry includes the set time along with a "Delete" button to remove the alarm.

### Delete Alarm
* Users can easily delete alarms from the list by clicking the associated "Delete" button.
* Deleting an alarm ensures that it won't trigger an alert when its time comes.

### Play Notification Sound:
* When an alarm time is reached, the application plays a notification sound to alert the user. The sound can be heard through an audio element on the page.
* The sound is set to loop continuously to ensure the user is alerted until they interact with it.

### Confirmation Dialog:
* Upon triggering the alarm, a confirmation dialog is displayed every second, asking the user if they want to stop the alarm.
* The dialog provides a message indicating that the alarm is going off. The user can choose to stop the alarm by clicking the "OK" button on the dialog.

### Stopping Alarms:
* If the user confirms in the dialog, the notification sound is paused, effectively stopping the alarm.
* Additionally, the associated alarm is deleted from the list to prevent it from alerting again.
* The interval for displaying the confirmation dialog is cleared to stop showing the dialog.

# How to Use
### Set Alarm:
* Enter the desired hour, minute, second, and select AM or PM.
* Click the "Set Alarm" button to add the alarm to the list.

### View Alarms:
* The list of alarms is displayed below the clock face.
* Each alarm entry includes a "Delete" button.
  
### Delete Alarm:
* To remove an alarm, click the "Delete" button associated with it.
* The alarm will be removed from the list and won't trigger future alerts.

# Code Overview
The application is built using HTML, CSS, and JavaScript. The key components of the code include:

* Clock Face: The clock face displays the current time and updates every second using the updateClock function.

* Set Alarm: The setAlarm function captures user input for the alarm time and adds it to the alarms list. It prevents duplicate alarms and clears input fields after setting an alarm.

* Alarms List: Alarms set by the user are displayed in a list below the clock face. Each alarm entry includes a "Delete" button, which triggers the deleteAlarm function.

* Delete Alarm: The deleteAlarm function removes an alarm from the list and ensures it won't trigger further alerts.

* Check Alarms: The checkAlarms function compares the current time to the alarm times in the list and triggers an alert if a match is found. It then removes the alarm from the list.

The application's functionality is maintained through intervals: the clock is updated every second, and alarms are checked every second for triggers.

# Getting Started
* Clone or download the repository.

* Open the index.html file in your web browser.

* Use the provided interface to set alarms, manage the alarms list, and enjoy the clock functionality.

Feel free to customize and enhance the application according to your preferences and requirements.
