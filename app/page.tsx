export default function page() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-24'>
      <div>
        <h1 className='uppercase text-white tracking-[1.5px] font-medium py-8 text-2xl'>
          our cinematic
        </h1>

        <div className='flex items-center justify-center space-x-4'>
          <div className=' min-h-[200px] flex items-center justify-center'>
            <button className='px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
              Hover me
            </button>
          </div>
          <div className=' min-h-[200px] flex items-center justify-center'>
            <button className='px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
              Hover me
            </button>
          </div>
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
