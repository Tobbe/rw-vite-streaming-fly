import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String1330065' } },
    two: { data: { email: 'String5278241' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
