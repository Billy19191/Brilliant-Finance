'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CryptoIconProps {
  symbol: string
  size?: number
  className?: string
  fallback?: React.ReactNode
}

export default function CryptoIcon({
  symbol,
  size = 24,
  className = '',
  fallback,
}: CryptoIconProps) {
  const [hasError, setHasError] = useState(false)
  const iconPath = `/crypto_token_logo/${symbol.toLowerCase()}.svg`

  if (hasError && fallback) {
    return <div className={className}>{fallback}</div>
  }

  if (hasError) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 ${className}`}
      >
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
          {symbol.slice(0, 3).toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src={iconPath}
        alt={`${symbol} logo`}
        width={size}
        height={size}
        className="object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
