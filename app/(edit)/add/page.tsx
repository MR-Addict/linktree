import { unstable_getServerSession } from "next-auth/next";

import Add from "./Add";
import { Inform } from "../../components";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) return <Inform title="You haven't logged in, please login first!" />;

  return <Add />;
}
