import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'
const NOTIFICATION_KEY = 'ReactndMobileFlashcards:notifications'



export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Play a Flashcards Quiz!',
    body: "don't forget to play this great quiz game today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log("in setLocalNotifications.." + data);
      let notificationDate = new Date();
      if (data === true) {//app was already startet at least once so that asyncStorage data is true
        notificationDate.setDate(notificationDate.getDate() + 1);
      } else { //first start: set notification in one minute 
        const oneMinute = 60 * 1000;
        notificationDate.setTime(notificationDate.getTime() + oneMinute);
        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      }
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          console.log("status=" + status);
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: notificationDate,
                repeat: 'day',
              }
            );
            console.log("scheduled notification: " + notificationDate);

          }
        })
    })
}