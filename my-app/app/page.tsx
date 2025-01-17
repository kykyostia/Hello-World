import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/img/images.jpg')]  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <Image

          className="mx-auto w-fit animate-bounce "
          src="/img/kylah.jpg"
          alt="Next.js logo"
          width= {180}
          height={38}
        />
        <ol className=" w-full">

          <li className="mb-2 font-bold text-yellow-600 border-4 border-yellow-600 text-center"> 
            Kylah M. Ostia{" "}


        
          </li>
        </ol>

      </main>
    </div>
  );
}
