import { useContext } from 'react'
import { PortfolioContext } from './portfolioContext'

export function usePortfolio() {
  const portfolio = useContext(PortfolioContext)

  if (!portfolio) {
    throw new Error('usePortfolio must be inside PortfolioProvider')
  }

  return portfolio
}
