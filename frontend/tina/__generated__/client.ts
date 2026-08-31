import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/home/ynoacamino/dev/ender/enderhost-page/frontend/tina/__generated__/.cache/1788142573541', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  