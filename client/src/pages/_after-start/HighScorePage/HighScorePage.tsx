import React from 'react'
import { Link } from 'react-router-dom'

import styles from './high-score-page.scss'

export default function HighScorePage() {
  const sortedHighscoreUsers = useSortedHighscoreUsers()

  return (
    <NavigationLayout>
      <PageContentLayout>
        <h1>Topplista</h1>

        <ul>
          {sortedHighscoreUsers.map(user => (
            <li key={user.id}>
              <span>{user.position}</span>

              <Link to={getUserScorePath(user)}>{user.name}</Link>

              <span>{user.totalScore}</span>
            </li>
          ))}
        </ul>
      </PageContentLayout>
    </NavigationLayout>
  )
}
