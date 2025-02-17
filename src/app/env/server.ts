import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const SERVER_ENV = createEnv({
  server: {
    SOME_SERVER_ENV: z.string(),
  },
  runtimeEnv: {
    SOME_SERVER_ENV: process.env.SOME_SERVER_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
