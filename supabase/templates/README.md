# Fillo Supabase email templates

These branded templates are ready for the hosted Supabase project `bbmkzeltvdumfgdimkrw`.

In Supabase, open **Authentication → Email Templates** and paste `confirmation.html` into **Confirm signup** and `recovery.html` into **Reset password**. Keep `{{ .ConfirmationURL }}` unchanged. The hosted Supabase dashboard or Management API must be used to apply these templates; local template files are not automatically synced to a hosted project.

The application sends buyer signup confirmations to `/verify-email`; supplier and logistics partner signups continue directly into the workspace. Password recovery links go to `/reset-password`. Add the live application origin and these paths to **Authentication → URL Configuration → Redirect URLs** before testing production emails.
