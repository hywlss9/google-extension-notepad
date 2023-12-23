import Button from '@/components/button';
import Card from '@/components/card';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-[500px] h-[400px] p-4'>
      <Button>Add New Note</Button>
      <ul className='flex flex-col gap-y-4 overflow-auto w-full py-4'>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </main>
  );
}
