import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Milan - Personal portfolio NextJs template',
  description: 'Personal portfolio website built with Next.js',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
