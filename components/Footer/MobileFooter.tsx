import LinkCard from "./LinkCard";
import { links } from "./config";

export default function MobileFooter() {
  return (
    <div className='md:hidden flex w-full flex-col items-start justify-between gap-5'>
      {links.map((item1, index1) => (
        <div key={index1} className='flex flex-col gap-2 w-full'>
          <h1>{item1.head}</h1>
          <div className='grid gap-2 grid-cols-2'>
            {item1.data.map((item2, index2) => (
              <LinkCard item={item2} key={index2} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
