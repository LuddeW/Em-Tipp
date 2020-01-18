import React, { useState } from 'react'

import Checkbox from '../CheckboxComponent/Checkbox'

interface QuestionCardProps {
  question: string
}

export default function NotificationCard() {
  const [gameResultChecked, setGameResultChecked] = useState(false)
  const [resultChecked, setResultChecked] = useState(false)
  const [answerChecked, setAnswerChecked] = useState(false)
  const [startChecked, setStartChecked] = useState(false)

  return (
    <div>
      <h2>Notiser</h2>
      <Checkbox
        title="Matchresultat"
        name="gameResult"
        checked={gameResultChecked}
        onChange={setGameResultChecked}
      />
      <Checkbox
        title="Ställning vid dagsslut"
        name="result"
        checked={resultChecked}
        onChange={setResultChecked}
      />
      <Checkbox
        title="Nytt svar på utslagsfråga"
        name="answer"
        checked={answerChecked}
        onChange={setAnswerChecked}
      />
      <Checkbox
        title="Start / Slut på tävling"
        name="start"
        checked={startChecked}
        onChange={setStartChecked}
      />
    </div>
  )
}
