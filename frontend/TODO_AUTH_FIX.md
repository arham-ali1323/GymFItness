# Auth “Failed to fetch” fix (GymFitness)

## Completed
- Updated `frontend/lib/authContext.tsx` to use `process.env.NEXT_PUBLIC_API_BASE_URL` for auth API base instead of hardcoding `http://localhost:5000`.

## Next (run/check)
1. Add `NEXT_PUBLIC_API_BASE_URL` to `frontend/.env.local` (do not commit), matching where your backend runs (example: `http://localhost:5000` or `http://192.168.x.x:5000`).
2. Restart `frontend` dev server.
3. Trigger login/register and confirm the browser “Failed to fetch” is gone.

