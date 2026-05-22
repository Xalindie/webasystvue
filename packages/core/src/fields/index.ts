import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const fieldVariants = cva('field', {
    variants: {
        vertical: { true: 'vertical', false: undefined },
    },
    defaultVariants: {
        vertical: undefined,
    },
})

export type FieldVariants = VariantProps<typeof fieldVariants>

export const fieldNameVariants = cva('name', {
    variants: {
        forInput: { true: 'for-input', false: undefined },
        forButton: { true: 'for-button', false: undefined },
        forCheckbox: { true: 'for-checkbox', false: undefined },
        forSwitch: { true: 'for-switch', false: undefined },
        middle: { true: 'middle', false: undefined },
    },
    defaultVariants: {
        forInput: undefined,
        forButton: undefined,
        forCheckbox: undefined,
        forSwitch: undefined,
        middle: undefined,
    },
})

export type FieldNameVariants = VariantProps<typeof fieldNameVariants>

export const fieldValueVariants = cva('value', {
    variants: {
        middle: { true: 'middle', false: undefined },
        submit: { true: 'submit', false: undefined },
    },
    defaultVariants: {
        middle: undefined,
        submit: undefined,
    },
})

export type FieldValueVariants = VariantProps<typeof fieldValueVariants>

export const fieldsVariants = cva('fields', {
    variants: {
        vertical: { true: 'vertical', false: undefined },
    },
    defaultVariants: {
        vertical: undefined,
    },
})

export type FieldsVariants = VariantProps<typeof fieldsVariants>

export {
    default as Field,
    type FieldProps,
} from './Field.vue'
export {
    default as FieldName,
    type FieldNameProps,
} from './FieldName.vue'
export {
    default as Fields,
    type FieldsProps,
} from './Fields.vue'
export {
    default as FieldsGroup,
    type FieldsGroupProps,
} from './FieldsGroup.vue'
export {
    default as FieldValue,
    type FieldValueProps,
} from './FieldValue.vue'
