import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { greeting } from "../src/main";

describe('Greeting', () => {
  it('should return "Hello, world!"',  () => {
    const result = greeting()
    assert.equal(result, "Hello, world!");
  })
})
