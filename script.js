// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login/Signup Modal
const loginModal = document.getElementById('loginModal');
const loginLink = document.getElementById('loginLink');
const closeModal = document.querySelector('.close');

loginLink.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Auth Form
const authForm = document.getElementById('authForm');
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Logged in successfully!');
      loginModal.style.display = 'none';
    })
    .catch((error) => {
      alert(error.message);
    });
});

signupButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Signed up successfully!');
      loginModal.style.display = 'none';
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Nutrition Plan Generator
document.getElementById('nutritionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const diet = document.getElementById('diet').value;
  const allergies = document.getElementById('allergies').value;
  const goals = document.getElementById('goals').value;

  let mealPlan = '';

  if (goals === 'weight_loss') {
    mealPlan = `Breakfast: Oatmeal with fruits\nLunch: Grilled chicken salad\nDinner: Steamed vegetables with quinoa`;
  } else if (goals === 'muscle_gain') {
    mealPlan = `Breakfast: Protein smoothie\nLunch: Grilled salmon with brown rice\nDinner: Chicken stir-fry with vegetables`;
  } else {
    mealPlan = `Breakfast: Whole grain toast with avocado\nLunch: Quinoa salad with chickpeas\nDinner: Baked sweet potato with beans`;
  }

  document.getElementById('mealPlan').textContent = mealPlan;
});

// Wellness Tracker
document.getElementById('logData').addEventListener('click', function () {
  const activity = document.getElementById('activity').value;
  const sleep = document.getElementById('sleep').value;
  const stress = document.getElementById('stress').value;

  let activityInsight = '';
  let sleepInsight = '';
  let nutritionInsight = '';

  if (activity < 30) {
    activityInsight = 'Try to increase your physical activity to at least 30 minutes per day.';
  } else {
    activityInsight = 'Great job! Keep up the good work.';
  }

  if (sleep < 7) {
    sleepInsight = 'Aim for at least 7 hours of sleep per night for optimal health.';
  } else {
    sleepInsight = 'You’re getting enough sleep. Well done!';
  }

  if (stress === 'high') {
    nutritionInsight = 'Consider incorporating stress-reducing foods like leafy greens and nuts into your diet.';
  } else {
    nutritionInsight = 'Your stress levels are manageable. Keep it up!';
  }

  document.getElementById('activityInsight').textContent = activityInsight;
  document.getElementById('sleepInsight').textContent = sleepInsight;
  document.getElementById('nutritionInsight').textContent = nutritionInsight;
});

// Community Join Button
document.getElementById('joinCommunity').addEventListener('click', function () {
  alert('Welcome to the NutriTrack community!');
});
