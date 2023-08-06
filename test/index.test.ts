import { describe, expect } from '@jest/globals'
import { helloworld } from '../src'

describe('simple test helloworld()', () => {
  expect(helloworld()).toBe('Hello World')
})