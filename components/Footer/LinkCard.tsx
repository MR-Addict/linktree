import { FaShare } from "react-icons/fa";

import { linkItemType } from "./config";

export default function LinkCard({ item }: { item: linkItemType }) {
  return (
    <a
      href={item.link}
      target='_blank'
      className='dark:text-gray-400 dark:hover:text-gray-200 flex flex-row gap-1 items-center text-gray-500 hover:text-gray-700'
    >
      <h1>{item.title}</h1>
      {!item.isLocal && <FaShare size={10} />}
    </a>
  );
}
