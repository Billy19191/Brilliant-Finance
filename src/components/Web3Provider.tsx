'use client'

import React from 'react'
import { createConfig, WagmiProvider } from 'wagmi'
import { mainnet, base } from 'wagmi/chains'
import { http } from 'viem'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

// Minimal default config for ConnectKit + wagmi. In production, replace publicProvider
// with an RPC provider like alchemy or infura, and set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
// in your environment.

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
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
