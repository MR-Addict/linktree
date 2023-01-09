import { unstable_getServerSession } from "next-auth/next";

import Button from "./Button";
import Addlink from "./Addlink";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Avatar() {
  const session = await unstable_getServerSession(authOptions);

  if (session)
    return (
      <div className='flex flex-row gap-2 md:gap-3'>
        <Addlink />
        <Button isLogin={false} />
      </div>
    );
  else return <Button isLogin={true} />;
}
