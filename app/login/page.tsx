import { unstable_getServerSession } from "next-auth/next";

import Login from "./Login";
import authOptions from "../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (session) return <h1>You have logged in, please logout first!</h1>;

  return <Login />;
}
