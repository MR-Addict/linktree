import { unstable_getServerSession } from "next-auth/next";

import LoginLogoutButton from "./LoginLogoutButton";
import NewlinkButton from "./NewlinkButton";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function NavbarButtons() {
  const session = await unstable_getServerSession(authOptions);

  if (session)
    return (
      <div className='flex flex-row gap-2 md:gap-3'>
        <NewlinkButton />
        <LoginLogoutButton isNeedLogin={false} />
      </div>
    );
  else return <LoginLogoutButton isNeedLogin={true} />;
}
