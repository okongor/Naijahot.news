import "./reset.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<head>
  <meta name="google-adsense-account" content="ca-pub-7094656317998541"></meta>
</head>
      <body>{children}</body>
    </html>
  );
}
