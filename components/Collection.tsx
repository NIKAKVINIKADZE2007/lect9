'use client';
import Image from 'next/image';

type CollectionProps = {
  name: string;
  photos: string[];
};

export default function Collection({ name, photos }: CollectionProps) {
  return (
    <div className='max-w-[470px] bg-white p-[30px] rounded-[30px] shadow-md cursor-pointer transition-all duration-150 ease-in-out hover:shadow-xl hover:translate-y-[-5px]'>
      <h2 className='mt-[15px] text-[20px] font-serif text-black'>{name}</h2>

      {photos[0] ? (
        <Image
          className='h-[250px] w-full object-cover rounded-[20px]'
          width={470}
          height={250}
          objectFit='cover'
          alt='item'
          src={photos[0]}
        />
      ) : (
        <div className='h-[250px] w-full object-cover rounded-[20px] mb-[15px] bg-gray-300'></div>
      )}

      <div className='flex justify-between mt-[20px]'>
        {photos[1] ? (
          <Image
            className='h-[80px] w-[31%] rounded-[20px]'
            width={470}
            height={250}
            objectFit='cover'
            alt='item'
            src={photos[1]}
          />
        ) : (
          <div className='h-[80px] w-[31%] rounded-[20px]'></div>
        )}

        {photos[2] ? (
          <Image
            className='h-[80px] w-[31%] rounded-[20px]'
            width={470}
            height={250}
            objectFit='cover'
            alt='item'
            src={photos[2]}
          />
        ) : (
          <div className='h-[80px] w-[31%] rounded-[20px]'></div>
        )}

        {photos[3] ? (
          <Image
            className='h-[80px] w-[31%] rounded-[20px]'
            width={470}
            height={250}
            objectFit='cover'
            alt='item'
            src={photos[3]}
          />
        ) : (
          <div className='h-[80px] w-[31%] rounded-[20px]'></div>
        )}
      </div>
    </div>
  );
}
