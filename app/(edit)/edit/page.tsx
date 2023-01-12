import { unstable_getServerSession } from "next-auth/next";

import Edit from "./Edit";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Page({ searchParams }: any) {
  const session = await unstable_getServerSession(authOptions);

  if (!session) return <h1>You haven't logged in, please login first!</h1>;

  if (!searchParams._id || !searchParams.head || !searchParams.title || !searchParams.link || !searchParams.intro)
    return <h1>You cannot directly visit this page!</h1>;

  return <Edit initFormData={searchParams} />;
}
