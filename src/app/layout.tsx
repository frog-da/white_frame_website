export const metadata = {
  title: 'WhiteFrame',
  description: 'WhiteFrame - Официальный сайт',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
