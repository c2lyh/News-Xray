import firebase from "firebase"; 
require("firebase/firestore");
import Database from '../backend/Database'; 


export default class Crowdsource {

    static sendUnverified( nameInput, notesInput ) {

        if (!firebase.apps.length) 
            firebase.initializeApp(Database.FirebaseConfig);

        const db = firebase.firestore();

        db.collection("unverified").add({
            name: nameInput,
            notes: notesInput,
        })





    }
}