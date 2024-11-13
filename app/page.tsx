'use client';
import { useEffect, useState } from 'react';
import Collection from '@/components/Collection';

type CollectionData = {
  category: number;
  name: string;
  photos: string[];
};

type Category = {
  name: string;
};

export default function Home() {
  const [collections, setCollections] = useState<CollectionData[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>();
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const url = `https://6734a44fa042ab85d11b0c1a.mockapi.io/photos?${
          categoryId ? `?category=${categoryId}` : ''
        }`;
        const response = await fetch(url);
      } catch (error) {}
    };

    fetchCollections();
  }, [categoryId]);

  const filterCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const myCategory: Category[] = [
    { name: 'All' },
    { name: 'Sea' },
    { name: 'Mountains' },
    { name: 'Architecture' },
    { name: 'Cities' },
  ];

  return (
    <div className=''>
      <h1 className='font-serif'>My Photo Collection</h1>
      <div className='flex items-center flex-wrap mt-[40px]'>
        <ul className='flex list-none p-0'>
          {myCategory.map((category, index) => (
            <li
              key={index}
              onClick={() => setCategoryId(index)}
              className={`inline-block py-[12px] px-[18px] rounded-[10px] mr-[10px] cursor-pointer font-semibold text-[18px] border-[1px] border-transparent hover:border-black active:bg-black active:text-white transition-all duration-150 ease-in-out ${
                categoryId === index ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <input
          className='mt-[20px] w-[250px] h-[50px] p-[0_15px] text-[16px] rounded-[10px] border-[1px] border-[#00000033] focus:border-[#00000066] outline-none transition-all duration-150 ease-in-out'
          placeholder='Search With Name'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {collections.map((collection) => {
        return (
          <Collection
            key={collection.name}
            name={collection.name}
            photos={collection.photos}
          />
        );
      })}
    </div>
  );
}
