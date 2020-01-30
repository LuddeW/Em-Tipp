import React, { useState } from 'react'

import Checkbox from '../Checkbox/Checkbox'

export default function ResultDecider() {
  const [oneChecked, setOneChecked] = useState(false)
  const [xChecked, setXChecked] = useState(false)
  const [twoChecked, setTwoChecked] = useState(false)

  return (
    <div>
      <Checkbox
        title="1"
        name="1"
        checked={oneChecked}
        onChange={setOneChecked}
      />
      <Checkbox title="X" name="X" checked={xChecked} onChange={setXChecked} />
      <Checkbox
        title="2"
        name="2"
        checked={twoChecked}
        onChange={setTwoChecked}
      />
    </div>
  )
}
