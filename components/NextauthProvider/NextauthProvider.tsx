"use client";

import { SessionProvider } from "next-auth/react";

export const NextauthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
