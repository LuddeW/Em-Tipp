import createMatchRoutes from './matches'

export default function InitializeServerRoutes(app: any) {
  app.use('/api/matches', createMatchRoutes())
}
