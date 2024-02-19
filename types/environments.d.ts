namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SERVICE_ROLE_KEY: string;
    PW: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
  }
}