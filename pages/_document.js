import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <body>
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLTR7GT"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    </body>
  );
}
