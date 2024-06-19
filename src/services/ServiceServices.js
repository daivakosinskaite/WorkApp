import firebase from "../firebase";

const db = firebase.firestore();

export const addService = (data) => {
  return db.collection('services').add(data);
}

export const getAllServices = (onServicesChanged) => {
  return db.collection('services').onSnapshot((snapshot) => {
    const services = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    onServicesChanged(services);
  });
}

export const deleteService = (id) => {
  return db.collection('services').doc(id).delete();
}
