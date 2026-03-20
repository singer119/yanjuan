importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "你的_API_KEY",
    authDomain: "你的_PROJECT.firebaseapp.com",
    projectId: "你的_PROJECT_ID",
    storageBucket: "你的_PROJECT.appspot.com",
    messagingSenderId: "你的_SENDER_ID",
    appId: "你的_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: '/icon.png'
    };
    self.registration.showNotification(title, options);
});
