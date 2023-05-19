import { ReactNode } from 'react'
import StyledComponentsRegistry from '../lib/registry'
import ProviderGlobal from '../lib/ProviderGlobal'

export const metadata = {
  title: 'Meu portfolio',
  description: 'Meu portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ProviderGlobal>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ProviderGlobal>
      </body>
    </html>
  )
}
