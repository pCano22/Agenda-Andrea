import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBE0_EFor1CVwlmE3F3R43sDeh33Yriha8",
    authDomain: "agenda-notas-a3598.firebaseapp.com",
    projectId: "agenda-notas-a3598",
    storageBucket: "agenda-notas-a3598.firebasestorage.app",
    messagingSenderId: "943526743691",
    appId: "1:943526743691:web:f47feec602737894a40e8e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para GUARDAR
export async function guardarNota(titulo, contenido) {
    try {
        await addDoc(collection(db, "Notas"), {
            titulo: titulo,
            contenido: contenido,
            fecha: new Date().getTime() 
        });
        return true;
    } catch (error) {
        console.error("Error al guardar:", error);
        return false;
    }
}

// Función para LEER (Esta es la que evita que se borren)
export async function obtenerNotas() {
    try {
        const q = query(collection(db, "Notas"), orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        const notas = [];
        querySnapshot.forEach((doc) => {
            notas.push({ id: doc.id, ...doc.data() });
        });
        return notas;
    } catch (error) {
        console.error("Error al obtener notas:", error);
        return [];
    }
}