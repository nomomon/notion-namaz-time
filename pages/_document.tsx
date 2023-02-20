import { Html, Head, Main, NextScript } from 'next/document'

const basePath = '/notion-namaz-time'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href={`${basePath}/sun.svg`} type="image/svg+xml" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
