// 1. 引入 Firebase Service Worker 腳本
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 2. 初始化 Firebase (這裡的資訊請跟 index.html 保持一致)
firebase.initializeApp({
    apiKey: "你的_API_KEY",
    authDomain: "你的_PROJECT.firebaseapp.com",
    projectId: "你的_PROJECT_ID",
    storageBucket: "你的_PROJECT.appspot.com",
    messagingSenderId: "你的_SENDER_ID",
    appId: "你的_APP_ID"
});

const messaging = firebase.messaging();

// 3. 處理背景通知
messaging.onBackgroundMessage((payload) => {
    console.log('[sw.js] 收到背景推播: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png', // 這裡確保你的 GitHub 有這張圖
        data: { url: payload.notification.click_action }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// 4. 點擊通知後的動作：開啟網頁
self.onnotificationclick = function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
};
