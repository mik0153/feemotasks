const firebase = require('firebase');
require('firebase/firestore');

const config = {
    apiKey: 'AIzaSyCsdd-eTMGTFAiZncrLSqOmhTnYRHFPPFs',
    authDomain: 'feemotasks.firebaseapp.com',
    databaseURL: 'https://feemotasks.firebaseio.com',
    projectId: 'feemotasks',
    storageBucket: 'feemotasks.appspot.com',
    messagingSenderId: '826170901354',
};

const fire = firebase.initializeApp(config);
export { fire };