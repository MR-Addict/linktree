export default function Inform({ title }: { title: string }) {
  return (
    <div className='frame w-full flex flex-col items-center justify-center gap-2'>
      <h1>{title}</h1>
    </div>
  );
}
