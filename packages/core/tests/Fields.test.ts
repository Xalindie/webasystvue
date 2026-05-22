import { describe, it } from 'vitest'
import { Field, FieldName, Fields, FieldsGroup, FieldValue } from '../src'
import { mountCheck } from './utils'

describe('fields компонент', () => {
    it('field монтируется', () => mountCheck(Field))
    it('fieldName монтируется', () => mountCheck(FieldName))
    it('fields монтируется', () => mountCheck(Fields))
    it('fieldsGroup монтируется', () => mountCheck(FieldsGroup))
    it('fieldValue монтируется', () => mountCheck(FieldValue))
})
