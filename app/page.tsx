import { linktree } from "./config";
import { LinktreeCard } from "./components";

export default function Page() {
  return (
    <div className='frame flex flex-col gap-10'>
      {linktree.map((item, index) => (
        //  @ts-expect-error Server Component
        <LinktreeCard key={index} linktree={item} />
      ))}
    </div>
  );
}
