import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

import { User } from './schemas/User';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutoial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
    User,
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});