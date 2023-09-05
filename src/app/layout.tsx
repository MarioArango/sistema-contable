import './globals.scss'
import ProviderStore from '@/providers/Store'
import ProviderDesign from '@/providers/Design'
import Layout from '@/components/layout'
import { IChildren } from '@/interfaces/IChildren'
import { ILng } from '@/interfaces/ILng'

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang='es' dir='ltr'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ProviderStore>
          <ProviderDesign>
            <Layout>
              {children}
            </Layout>
          </ProviderDesign>
        </ProviderStore>
      </body>
    </html>
  )
}
