import { push, set, get, ref, child, update, remove } from "firebase/database";

import database from "../data/firebase"

export const firebaseAdd = (nalog) => {
  const newRef = push(ref(database, "digirn2/"));
  set(newRef, nalog);
}

export const firebaseGetOne = async (id) => {
  try {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `digirn2/${id}`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
  } catch(error) {
    console.error(error);
  };
}

export const firebaseUpdate = (id, nalog) => {
  update(ref(database, "digirn2/" + id), nalog);
}

export const firebaseDelete = (id) => {
  remove(ref(database, "digirn2/" + id));
}