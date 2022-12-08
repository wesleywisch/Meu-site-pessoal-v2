import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href="./favicon.png" type="image/png" />

          <meta name='application-name' content='Wesley Wisch | Meu portfólio' />

          <meta
            name='description'
            content='Sou um desenvolvedor Front-End Júnior e aqui apresento alguns projetos desenvolvidos por mim!'
          />

          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end Júnior e aqui apresento alguns projetos desenvolvidos por mim!"
          />

          <title>Wesley Wisch | Meu portfólio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}