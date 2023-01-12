import { Mongodb } from "../lib/mongodb";
import LinktreeCard from "./LinktreeCard";

export default async function Page() {
  const mongodb = new Mongodb();
  const links = await mongodb.getlinks();

  if (links.data)
    return (
      <div className='frame flex flex-col gap-10 md:gap-16'>
        {links.data.map((item, index) => (
          //  @ts-expect-error
          <LinktreeCard key={index} head={item._id} links={item.data} />
        ))}
      </div>
    );
}
