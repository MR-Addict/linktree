import { unstable_getServerSession } from "next-auth/next";

import Add from "./Add";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) return <h1>You haven't logged in, please login first!</h1>;

  return <Add />;
}
