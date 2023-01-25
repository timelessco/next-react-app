import type { z } from "zod";

import type { clientSchema, serverSchema } from "./schema";

declare global {
  // By default, we do not want any namespace in Start UI [web] as it is more
  // error prone and not useful in front end applications.
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv
      extends z.infer<typeof clientSchema>,
        z.infer<typeof serverSchema> {}
  }
}
