import { unstable_getServerSession } from "next-auth/next";

import Edit from "./Edit";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (session) {
    return <Edit />;
  }
  return (
    <div className='frame w-full flex flex-col items-center justify-center gap-2'>
      <h1>You haven't logged in, please login first!</h1>
    </div>
  );
}
