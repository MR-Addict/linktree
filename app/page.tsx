import { Mongodb } from "../lib/mongodb";
import LinktreeCard from "./LinktreeCard";

export default async function Page() {
  const mongodb = new Mongodb();
  const heads = await mongodb.getHeads();

  if (heads.status && heads.data) {
    return (
      <div className='frame flex flex-col gap-10'>
        {heads.data.map((item, index) => (
          //  @ts-expect-error Server Component
          <LinktreeCard key={index} head={item} />
        ))}
      </div>
    );
  } else {
    throw new Error(heads.message);
  }
}
