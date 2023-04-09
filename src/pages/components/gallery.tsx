import Image from 'next/image'

export function Gallery() {
  return (
    <>
      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Gallery
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-1 sm:w-5/6 flex flex-col items-center border border-solid border-yellow-600 dark:border-gray-100 bg-white dark:bg-black py-6 px-6 rounded-xl shadow-xl">
            <Image
              src="/images/gallery-card-1.jpeg"
              alt="placeholder-alt-tag"
              width="1080"
              height="1080"
              className="w-1/2 mb-6"
            />
          </li>
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-yellow-600 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-3.jpeg"
              alt="placeholder-alt-tag"
              width="1080"
              height="1080"
              className="w-1/2 mb-6"
            />
          </li>
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-yellow-600 dark:border-yellow-700 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/gallery-card-2.jpeg"
              alt="placeholder-alt-tag"
              width="1080"
              height="1080"
              className="w-1/2 mb-6"
            />
          </li>
        </ul>
      </section>
    </>
  )
}
