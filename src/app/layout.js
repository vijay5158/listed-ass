import './globals.css'


export const metadata = {
  title: 'Board',
  description: 'Listed Frontend Developer Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
