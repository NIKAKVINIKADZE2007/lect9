export default function page() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-24'>
      <div>
        <h1 className='uppercase text-white tracking-[1.5px] font-medium py-8 text-2xl'>
          our cinematic
        </h1>

        <div className='flex items-center justify-center space-x-4'>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-200 hover:bg-white hover:text-black'>
            our work{' '}
          </button>
          <button className='px-8 py-6 mx-4 bg-transparent border border-white text-xs text-white uppercase transition duration-200 hover:bg-white hover:text-black'>
            our work{' '}
          </button>
        </div>
      </div>

      <video
        src='/video.mp4'
        autoPlay
        loop
        muted
        className='absolute h-full w-full object-cover -z-10 inset-0'
      ></video>
    </main>
  );
}
