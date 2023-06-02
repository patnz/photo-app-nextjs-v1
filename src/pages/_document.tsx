import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&family=Caveat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden bg-white dark:bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
