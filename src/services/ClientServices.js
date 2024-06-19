import firebase from "../firebase";

const db = firebase.firestore();

export const addClient = (data) => {
  return db.collection('clients').add(data);
}

export const getAllClients = (onClientsChanged) => {
  return db.collection('clients').onSnapshot((snapshot) => {
    const clients = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    onClientsChanged(clients);
  });
}

export const deleteClient = (id) => {
  return db.collection('clients').doc(id).delete();
}
