
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'new-drbook-app.firebaseapp.com',
  projectId: 'new-drbook-app',
  storageBucket: 'new-drbook-app.firebasestorage.app',
  messagingSenderId: '703965591707',
  appId: '1:703965591707:web:3c0d3bc63291341a3b2e3e'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
});
