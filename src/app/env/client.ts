import { createEnv } from "@t3-oss/env-nextjs";
import { env } from "next-runtime-env";
import { z } from "zod";

// TODO: add later to middleware
export const CLIENT_ENV = createEnv({
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: env("NEXT_PUBLIC_API_BASE_URL"),
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
