import React from 'react'

import PageLayout from '../../components/_layouts/PageLayout'
import Heading from '../../components/_typography/Heading'
import Group, { GroupProps } from '../../components/Group/Group'

export interface GroupsInterface {
  groups: GroupProps[]
}

export default function QuestionPage({ groups }: GroupsInterface) {
  const questions = groups.map((group, x) => {
    return <Group {...group} key={x} />
  })

  return (
    <PageLayout>
      <Heading text="Match decider" />
      {questions}
    </PageLayout>
  )
}
