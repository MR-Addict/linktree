import { unstable_getServerSession } from "next-auth/next";

import Button from "./Button";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Avatar() {
  const session = await unstable_getServerSession(authOptions);

  if (session) return <Button isLogin={false} />;
  else return <Button isLogin={true} />;
}
