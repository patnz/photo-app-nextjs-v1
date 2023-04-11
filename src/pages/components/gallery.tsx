import Image from 'next/image'

export function Gallery() {
  return (
    <>
      <section
        id="gallery"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Travel
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row justify-around gap-5">
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-gray-100 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-3xl"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-gray-100 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-3xl"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-gray-100 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-2.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-90 mb-0 mx-1 rounded-3xl"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-gray-100 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-90 mb-0 mx-1 rounded-3xl"
            />
          </li>
        </ul>
      </section>
    </>
  )
}
