import Button from '@/components/button';

export default function Card() {
  return (
    <div className='flex flex-col justify-between w-full min-h-48 p-4 border-2 border-black rounded-lg list-none'>
      <div>
        <div className='mb-2'>
          <h3 className='font-medium text-lg'>Note 1</h3>
        </div>
        <div className='text-gray-600'>This is the content of the first note...</div>
      </div>
      <div className='flex justify-end mt-4'>
        <Button className='mr-2'>
          {/* <FileEditIcon className='w-4 h-4' /> */}
          edit
        </Button>
        <Button>
          delete
          {/* <DeleteIcon className='w-4 h-4' /> */}
        </Button>
      </div>
    </div>
  );
}
