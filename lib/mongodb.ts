import { MongoClient, Db } from 'mongodb';

/**
 * A single MongoClient is reused across requests. In development Next.js reloads
 * modules on every edit, so the client is cached on globalThis to stop each
 * reload opening a new connection pool and exhausting the server's connections.
 */
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? 'custompatchhouse';

function connect(): Promise<MongoClient> {
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Add it to .env.local and to the Vercel project settings.'
    );
  }
  return new MongoClient(uri).connect();
}

export function getClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === 'development') {
    global._mongoClientPromise ??= connect();
    return global._mongoClientPromise;
  }
  return (global._mongoClientPromise ??= connect());
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(dbName);
}

/** True when a connection string is configured at all. */
export const isDbConfigured = Boolean(uri);
