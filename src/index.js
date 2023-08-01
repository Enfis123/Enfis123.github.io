// main.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Obtener el formulario y el mensaje de éxito
const signupForm = document.getElementById('signup-form');
const successMessage = document.createElement('div');

// Agregar evento para enviar el formulario
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los valores ingresados por el usuario
  const name = signupForm.elements['name'].value;
  const email = signupForm.elements['email'].value;
  const password = signupForm.elements['password'].value;

  // Crear el usuario en Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registro exitoso, mostrar mensaje de éxito
      successMessage.textContent = 'Registro exitoso. Usuario creado correctamente.';
      successMessage.style.color = 'green';
      signupForm.appendChild(successMessage);
    })
    .catch((error) => {
      // Error en el registro, mostrar mensaje de error
      successMessage.textContent = `Error al registrar usuario: ${error.message}`;
      successMessage.style.color = 'red';
      signupForm.appendChild(successMessage);
    });
});
