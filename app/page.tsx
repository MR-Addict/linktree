import Link from "next/link";
import { notFound } from "next/navigation";

import style from "./page.module.css";
import { Mongodb } from "../lib/mongodb";
import LinktreeCard from "./LinktreeCard";

export default async function Page({ searchParams: { tab } }: { searchParams: { tab: string | undefined } }) {
  const mongodb = new Mongodb();
  const [links, heads] = await Promise.all([mongodb.getlinks(), mongodb.getheads()]);

  if (!links.data || !heads.data) notFound();

  const currentTab = String(tab || heads.data[0]);
  if (!heads.data?.includes(currentTab)) notFound();

  return (
    <div className='w-full frame flex flex-col gap-5'>
      <div className='flex flex-col md:flex-row gap-1 md:gap-3'>
        {heads.data.map((item) => (
          <Link
            key={item}
            href={{ pathname: "/", query: { tab: item } }}
            className={[
              "text-xl font-semibold rounded-md py-1 px-2 border border-gray-700",
              currentTab === item ? style.active : "",
            ].join(" ")}
          >
            {item}
          </Link>
        ))}
      </div>

      {links.data.map((item) => (
        // @ts-expect-error
        <LinktreeCard key={item._id} links={item.data} isActive={currentTab === item._id} />
      ))}
    </div>
  );
}
