import firebase from "../firebase";

const db = firebase.firestore();

export const addWork = (data) => {
  return db.collection('works').add(data);
}

export const getAllWorks = async (onWorksChanged, user) => {
  const snapshot = await db.collection('works').where("uid", "==", user?.uid).get();

  const newWorks = await Promise.all(snapshot.docs.map(async (doc) => {
    const workData = doc.data();
    
    const clientDoc = await db.collection('clients').doc(workData.company).get();
    const serviceDoc = await db.collection('services').doc(workData.service).get();

    const clientName = clientDoc.exists ? clientDoc.data().name : "Unknown Client";
    const serviceName = serviceDoc.exists ? serviceDoc.data().name : "Unknown Service";

    return {
      id: doc.id,
      ...workData,
      companyName: clientName,
      serviceName: serviceName,
    };
  }));

  onWorksChanged(newWorks);
}

export const getWorkById = async (item, id) => {
  const docRef = await db.collection('works').doc(id).get();
  item(docRef.data());
}

export const deleteWork = (id) => {
  return db.collection('works').doc(id).delete();
}

export const updateWork = (id, data) => {
  return db.collection('works').doc(id).set(data);
}
