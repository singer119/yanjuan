importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD2_eAUXKq4N_6bHxwkZ5cKoZv3RCVSY-c",
    authDomain: "yanjuan-accounting.firebaseapp.com",
    projectId: "yanjuan-accounting",
    storageBucket: "yanjuan-accounting.firebasestorage.app",
    messagingSenderId: "757038841020",
    appId: "1:757038841020:web:d66733ee8ddfedb8e9a4b9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon.png'
    });
});
