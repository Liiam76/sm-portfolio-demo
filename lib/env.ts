// Vercel sets VERCEL_GIT_COMMIT_REF for each deployment. The live site builds from main.
export const isLive = process.env.VERCEL_GIT_COMMIT_REF === "main";
