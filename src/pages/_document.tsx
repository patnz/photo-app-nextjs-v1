import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Bungee+Outline&family=Fira+Sans+Extra+Condensed:wght@200&family=Six+Caps&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
