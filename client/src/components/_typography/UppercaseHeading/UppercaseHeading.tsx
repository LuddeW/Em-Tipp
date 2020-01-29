import React, { ReactNode, ElementType } from 'react'

import styles from './uppercase-heading.scss'

interface UppercaseHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5

  children: ReactNode
}

export default function UppercaseHeading({
  level = 1,

  children
}: UppercaseHeadingProps) {
  const Element = `h${level}` as ElementType

  return (
    <Element className={styles['uppercase-heading']}>
      {React.Children.map(children, child => {
        if (typeof child !== 'string') {
          return child
        }

        return <span className={styles['string-child']}>{child}</span>
      })}
    </Element>
  )
}
