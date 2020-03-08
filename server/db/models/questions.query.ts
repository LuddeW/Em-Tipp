const { all, get, update, insert } = require('../postgres.ts')

export async function getAllQuestions() {
  const query = 'SELECT * FROM QUESTIONS'
  const values: string[] = []

  return all(query, values).then((result: any) => result)
}

export async function getQuestionById(id: string) {
  if (id) {
    const query = 'SELECT * FROM QUESTIONS WHERE id = $1'
    const values = [id]

    return get(query, values).then((result: any) => result)
  }

  return null
}

export async function addQuestion(question: string, type: string) {
  if (question && type) {
    const values = [question, type]
    const columns = ['question', 'type']

    const newQuestionId = await insert('questions', columns, values)
    return newQuestionId
  }

  return null
}

export async function deleteQuestion(id: string) {
  if (id) {
    const query = 'DELETE FROM QUESTIONS WHERE id = $1'
    const values = [id]

    return get(query, values).then((result: any) => result)
  }

  return null
}

export async function updateQuestion(id: string, newQuestion: string) {
  if (id && newQuestion) {
    const query = 'UPDATE QUESTIONS SET question = $1 WHERE id=$2'
    const values = [newQuestion, id]

    const updated = await update(query, values).then((result: any) =>
      Boolean(result)
    )

    const question = await getQuestionById(id)

    return { updated, question }
  }

  return null
}

export async function updateType(id: string, questionType: string) {
  if (id && questionType) {
    const query = 'UPDATE QUESTIONS SET type = $1 WHERE id=$2'
    const values = [questionType, id]

    const updated = await update(query, values).then((result: any) =>
      Boolean(result)
    )

    const question = await getQuestionById(id)

    return { updated, question }
  }

  return null
}

export async function updateQuestionAndType(
  id: string,
  newQuestion: string,
  questionType: string
) {
  if (id && newQuestion && questionType) {
    const query = 'UPDATE QUESTIONS SET question = $1, type = $2 WHERE id=$3'
    const values = [newQuestion, questionType, id]

    const updated = await update(query, values).then((result: any) =>
      Boolean(result)
    )

    const question = await getQuestionById(id)

    return { updated, question }
  }

  return null
}
