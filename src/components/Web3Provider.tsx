'use client'

import React from 'react'
import { createConfig, WagmiProvider } from 'wagmi'
import { mainnet, base } from 'wagmi/chains'
import { http } from 'viem'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, base],
    transports: {
      [mainnet.id]: http(),
    },
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? '',
    appName: 'Brilliant Finance',
  })
)

const queryClient = new QueryClient()

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            '--ck-font-family': 'var(--font-bitter)',
            '--ck-font-weight': '700',
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
