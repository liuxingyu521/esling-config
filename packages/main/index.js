import tsConfig from '@liuxingyu521/eslint-config-ts'
import baseConfig from '@liuxingyu521/eslint-config-base'
import stylisticConfig from '@liuxingyu521/eslint-config-stylistic'
import jsonConfig from '@liuxingyu521/eslint-config-json'

export const getConfig = () => {
  return [
    ...baseConfig,
    ...tsConfig,
    ...stylisticConfig,
    ...jsonConfig,
  ]
}
