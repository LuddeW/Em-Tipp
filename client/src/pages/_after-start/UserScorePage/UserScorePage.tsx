import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './user-score-page.scss'

export default function UserScorePage() {
  const { username } = useParams()

  const user = useUser(username)

  const isAuthenticatedUser = useIsAuthenticatedUser(user)
  const matchesWithGuesses = useMatchesWithGuesses(user.matchGuesses)
  const questionsWithAnswers = useQuestionsWithAnswers(user.questionAnswers)

  return (
    <NavigationLayout>
      <PageContentLayout>
        <h1>{user.name}</h1>

        <p>
          {isAuthenticatedUser ? 'Du ligger' : 'Ligger'} just nu på{' '}
          <span>
            {getPositionLabel(user.position) /* 1:a, 2:a, 3:e etc... */}
          </span>{' '}
          plats med totalt <span>{user.totalScore}</span> poäng.
        </p>

        <h2>Poäng från matcher: {user.matchesScore}</h2>
        <Collapsible>
          {matchesWithGuesses.map(({ match, guess }) => (
            <MatchGuess key={match.id} match={match} guess={guess} />
          ))}
        </Collapsible>

        <h2>Poäng från frågor: {user.questionsScore}</h2>
        <Collapsible>
          {questionsWithAnswers.map(({ question, answer }) => (
            <QuestionAnswer
              key={question.id}
              question={question}
              answer={answer}
            />
          ))}
        </Collapsible>
      </PageContentLayout>
    </NavigationLayout>
  )
}
