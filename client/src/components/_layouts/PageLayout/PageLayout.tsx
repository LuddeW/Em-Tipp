import React, { ReactNode } from 'react'

import './page-layout.scss'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <main>{children}</main>
}
