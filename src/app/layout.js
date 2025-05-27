import '@/app/global.css'

export const metadata = {
  title: 'I.S.P.P.',
  description: 'By FR4N =D',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
