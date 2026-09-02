# Fillo production monitoring

Fillo uses the Sentry browser SDK for production error tracking, React render-error capture, session replay on errors, and sampled browser performance traces.

Monitoring is **opt-in and safe by default**. The SDK does not initialize when `VITE_SENTRY_DSN` is absent. Personal data collection is disabled with `sendDefaultPii: false`; sensitive form values are not sent by the application.

## Vercel setup

1. Create a Sentry project using the React platform.
2. Copy its DSN.
3. In the Vercel Fillo project, add `VITE_SENTRY_DSN` with the DSN for **Production** and **Preview** as appropriate.
4. Redeploy the `main` branch.
5. In Sentry, confirm the environment is `production` and test by reviewing the first captured issue.

The integration uses `VITE_SENTRY_DSN`, `environment: import.meta.env.MODE`, `tracesSampleRate: 0.1`, `replaysSessionSampleRate: 0.05`, and `replaysOnErrorSampleRate: 1.0`.

Vercel runtime logs remain available for the bundled server/runtime layer. Sentry should be used for browser exceptions and React render failures, while Vercel logs provide deployment and runtime diagnostics.
