import { openDB } from 'idb';

const initDB = async () => {
  return await openDB('EconomicEventsDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('events')) {
        db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const getCachedData = async (key) => {
  const db = await initDB();
  return await db.get('events', key);
};

export const setCachedData = async (key, data) => {
  const db = await initDB();
  return await db.put('events', { id: key, data });
};

