import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { firebaseApp } from ".";
const db = getFirestore(firebaseApp);

// export const getData = async (collectionName) => {
//   const collectionData = collection(db, collectionName);
//   const querySnapshot = await getDocs(collectionData);

//   const data = [];
//   querySnapshot.forEach((doc) => {
//     data.push({
//       id: doc.id,
//       data: doc.data(),
//     });
//   });

//   console.log(data);
//   return data;
// };

export const getData = async (
  collectionName,
  documentId,
  fieldName = "data"
) => {
  console.log("hh", collectionName, documentId, fieldName);
  const docRef = doc(collection(db, collectionName), documentId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const fieldData = docSnapshot.get(fieldName);
    return fieldData;
  } else {
    console.log("Document not found!");
    return null;
  }
};
