import { createApp } from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';

async function bootstrap(): Promise<void> {
  await connectDb(env.MONGODB_URI);

  const app = createApp();
  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[BE] Server running on http://localhost:${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('[BE] Fatal error:', error);
  process.exit(1);
});
