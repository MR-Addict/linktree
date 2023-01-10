import Link from "next/link";

export default function Addlink() {
  return (
    <Link href={{ pathname: "/add" }} className='py-1 px-2 md:px-4 rounded-sm border border-black hover:shadow-md'>
      New Link
    </Link>
  );
}
