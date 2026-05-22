<template>
    <Story title="Fields/Demo">
        <Variant title="default">
            <Fields>
                <Field vertical>
                    <FieldName>
                        Company
                    </FieldName>
                    <FieldValue>
                        <strong>Webasyst LLC</strong>
                    </FieldValue>
                </Field>

                <FieldsGroup>
                    <Field>
                        <FieldName>
                            Company
                        </FieldName>
                        <FieldValue>
                            <strong>Webasyst LLC</strong>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName>
                            Phone
                        </FieldName>
                        <FieldValue>
                            <ul>
                                <li>+1 312 300-5125</li>
                                <li>+7 495 000-13-12</li>
                            </ul>
                        </FieldValue>
                    </Field>
                </FieldsGroup>

                <FieldsGroup>
                    <h5 class="heading">
                        An input form goes here
                    </h5>

                    <Field>
                        <FieldName
                            class="large"
                            for-input
                        >
                            Email
                        </FieldName>
                        <div class="value">
                            <input
                                class="long large bold"
                                type="email"
                                name=""
                                placeholder="your@email.here"
                            >
                            <p class="hint">
                                Use <code>.large</code> class for making individual inputs larger
                            </p>
                        </div>
                    </Field>

                    <Field>
                        <FieldName for-input>
                            Name
                        </FieldName>
                        <FieldValue>
                            <div class="flexbox space-16">
                                <div>
                                    <input
                                        class="bold"
                                        type="text"
                                        name=""
                                        value="Jimmy"
                                        placeholder="First name"
                                    >
                                </div>
                                <label>
                                    <input
                                        class="bold"
                                        type="text"
                                        name=""
                                        value="Clark"
                                        placeholder="Last name"
                                    >
                                    <span class="icon">
                                        <i class="fas fa-church"/>
                                    </span>
                                </label>
                            </div>
                            <p class="hint">
                                Inner <code>.flexbox</code> helps placing two inputs in a single
                                line
                            </p>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName
                            class="small"
                            for-input
                        >
                            Ш Б
                        </FieldName>
                        <FieldValue>
                            <div class="flexbox space-16">
                                <div>
                                    <input
                                        class="small"
                                        type="text"
                                        name=""
                                        placeholder=".small"
                                    >
                                </div>
                                <div>
                                    <input
                                        class="small"
                                        type="text"
                                        name=""
                                        placeholder=".small"
                                    >
                                </div>
                            </div>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName
                            class="smaller"
                            for-input
                        >
                            М Н К
                        </FieldName>
                        <FieldValue>
                            <div class="flexbox space-16">
                                <div>
                                    <input
                                        class="smaller"
                                        type="text"
                                        name=""
                                        placeholder=".smaller"
                                    >
                                </div>
                                <div>
                                    <input
                                        class="smaller"
                                        type="text"
                                        name=""
                                        placeholder=".smaller"
                                    >
                                </div>
                            </div>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName
                            class="smallest"
                            for-input
                        >
                            П З Д Ц
                        </FieldName>
                        <FieldValue>
                            <div class="flexbox space-16">
                                <div>
                                    <input
                                        class="smallest"
                                        type="text"
                                        name=""
                                        placeholder=".smallest"
                                    >
                                </div>
                                <div>
                                    <input
                                        class="smallest"
                                        type="text"
                                        name=""
                                        placeholder=".smallest"
                                    >
                                </div>
                            </div>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName
                            class="smaller"
                            for-input
                        >
                            Tell us why you wish to be added to our beta list
                        </FieldName>
                        <FieldValue>
                            <textarea
                                class="small"
                                placeholder="Go ahead, write something"
                            />
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName for-checkbox>
                            <label for="checkbox">.wa-checkbox</label>
                        </FieldName>
                        <FieldValue>
                            <label>
                                <span class="wa-checkbox">
                                    <input
                                        id="checkbox"
                                        type="checkbox"
                                        name="1"
                                        checked
                                    >
                                    <span>
                                        <span class="icon">
                                            <i class="fas fa-check"/>
                                        </span>
                                    </span>
                                </span>
                                A checkbox with <code>.wa-checkbox</code> styling
                            </label>
                            <p class="hint">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>

                            <label>
                                <input
                                    type="checkbox"
                                    checked
                                >
                                Simple checkbox with no styling is still available
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    selected
                                >
                                And a radio, too
                            </label>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName for-checkbox>
                            .wa-radio
                        </FieldName>
                        <FieldValue>
                            <label>
                                <span class="wa-radio">
                                    <input
                                        type="radio"
                                        name="name-1"
                                    >
                                    <span/>
                                </span>
                                Option 1
                            </label>
                        </FieldValue>
                        <FieldValue>
                            <label>
                                <span class="wa-radio">
                                    <input
                                        type="radio"
                                        name="name-1"
                                    >
                                    <span/>
                                </span>
                                Option 2
                            </label>
                        </FieldValue>
                        <FieldValue>
                            <label>
                                <span class="wa-radio">
                                    <input
                                        type="radio"
                                        name="name-1"
                                    >
                                    <span/>
                                </span>
                                Option 3
                            </label>
                        </FieldValue>
                        <FieldValue>
                            <label>
                                <span class="wa-radio">
                                    <input
                                        type="radio"
                                        name="name-1"
                                    >
                                    <span/>
                                </span>
                                Option 4
                            </label>
                        </FieldValue>
                    </Field>

                    <Field class="custom-mt-32">
                        <FieldName
                            class="largest"
                            for-input
                        >
                            Username
                        </FieldName>
                        <FieldValue>
                            <div class="wa-select largest">
                                <select name="">
                                    <option value="">
                                        Mr.
                                    </option>
                                    <option value="">
                                        Mrs.
                                    </option>
                                    <option value="">
                                        Miss
                                    </option>
                                    <option value="">
                                        Ms.
                                    </option>
                                </select>
                            </div>
                            <input
                                class="long largest bold"
                                type="text"
                                name=""
                                placeholder=".largest"
                            >
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName
                            class="larger"
                            for-input
                        >
                            Password
                        </FieldName>
                        <FieldValue>
                            <div class="wa-select larger solid">
                                <select name="">
                                    <option value="">
                                        Mr.
                                    </option>
                                    <option value="">
                                        Mrs.
                                    </option>
                                    <option value="">
                                        Miss
                                    </option>
                                    <option value="">
                                        Ms.
                                    </option>
                                </select>
                            </div>
                            <input
                                class="long larger bold solid"
                                type="text"
                                name=""
                                placeholder=".larger"
                            >
                        </FieldValue>
                    </Field>

                    <h5 class="heading">
                        How about a title here as well?
                    </h5>

                    <Field>
                        <FieldName for-input>
                            Select
                        </FieldName>
                        <FieldValue middle>
                            <div class="wa-select">
                                <select name="">
                                    <option value="">
                                        Saint-Petersburg
                                    </option>
                                    <option value="moscow">
                                        Moscow
                                    </option>
                                </select>
                            </div>
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName for-input>
                            Textarea
                        </FieldName>
                        <FieldValue middle>
                            <textarea
                                class="wide"
                                name=""
                            />
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldName for-input>
                            One more
                        </FieldName>
                        <FieldValue middle>
                            <textarea
                                class="outlined"
                                name=""
                                placeholder=".outlined"
                            />
                        </FieldValue>
                    </Field>

                    <Field>
                        <FieldValue submit>
                            <input
                                type="button"
                                class="button"
                                value="Save"
                            >
                        </FieldValue>
                    </Field>
                </FieldsGroup>
            </Fields>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Field, FieldName, Fields, FieldsGroup, FieldValue } from '@/fields'
</script>
