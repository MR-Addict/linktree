import { unstable_getServerSession } from "next-auth/next";

import Login from "./Login";
import Logout from "./Login";
import authOptions from "../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (session) return <Logout />;
  else return <Login />;
}
