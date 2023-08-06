import { describe, expect, test } from '@jest/globals'
import { helloworld } from '../src'

describe('simple test helloworld()', () => {
  test('hello world', () => {
    expect(helloworld()).toBe('Hello World!')
  })
})