import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configuración de tu Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBE0_EFor1CVwlmE3F3R43sDeh33Yriha8",
    authDomain: "agenda-notas-a3598.firebaseapp.com",
    projectId: "agenda-notas-a3598",
    storageBucket: "agenda-notas-a3598.firebasestorage.app",
    messagingSenderId: "943526743691",
    appId: "1:943526743691:web:f47feec602737894a40e8e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función que recibe el título y contenido REALES
export async function guardarNota(tituloRecibido, contenidoRecibido) {
    try {
        const docRef = await addDoc(collection(db, "Notas"), {
            titulo: tituloRecibido,
            contenido: contenidoRecibido,
            fecha: new Date().toLocaleString() // Guarda fecha y hora exacta
        });
        console.log("Documento guardado con ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al guardar: ", error);
        return false;
    }
}