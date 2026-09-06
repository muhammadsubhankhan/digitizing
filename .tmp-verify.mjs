import { MongoClient } from 'mongodb';
import { readFileSync } from 'fs';
const env = Object.fromEntries(readFileSync('.env.local','utf8').split('\n')
  .filter(l=>l.includes('=')&&!l.trim().startsWith('#'))
  .map(l=>{const i=l.indexOf('=');return [l.slice(0,i),l.slice(i+1)];}));
const c = new MongoClient(env.MONGODB_URI); await c.connect();
const db = c.db(env.MONGODB_DB);
console.log('posts collection now holds:', await db.collection('posts').countDocuments(), 'documents');
console.log('indexes:', (await db.collection('posts').indexes()).map(i=>i.name).join(', '));
await c.close();
