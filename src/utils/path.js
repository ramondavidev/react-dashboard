import path from 'path';
import fs from 'fs';

const remote = require('electron').remote;
const app = remote.app;

export const getPathRealm = (dbname, dbfile) => {
  const dirPath = path.join(app.getPath('userData'), 'db', dbname);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  const dbPath = path.join(dirPath, dbfile);
  console.log('DB_PATH: ', dbPath);
  return dbPath;
};
