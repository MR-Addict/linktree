import { unstable_getServerSession } from "next-auth/next";

import Login from "./Login";
import authOptions from "../../pages/api/auth/[...nextauth]";
import { Inform } from "../components";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (session) return <Inform title='You have logged in, please logout first!' />;

  return <Login />;
}
