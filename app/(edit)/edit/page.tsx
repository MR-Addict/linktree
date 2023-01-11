import { unstable_getServerSession } from "next-auth/next";

import Edit from "./Edit";
import { Inform } from "../../components";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function Page({
  searchParams,
}: {
  searchParams: { _id: string; head: string; title: string; link: string; intro: string };
}) {
  const session = await unstable_getServerSession(authOptions);

  if (!session) return <Inform title="You haven't logged in, please login first!" />;

  if (!searchParams._id || !searchParams.head || !searchParams.title || !searchParams.link || !searchParams.intro)
    return <Inform title='You cannot directly visit this page!' />;

  return <Edit initFormData={searchParams} />;
}
