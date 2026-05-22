<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="found-a-bug"
                    tag="h1"
                >
                    Нашли ошибку?
                </DocHeading>

                <DocHeading
                    id="write-issue"
                    tag="h2"
                    parent="found-a-bug"
                >
                    Напишите issue
                </DocHeading>

                <p>
                    Если вы нашли баг или хотите предложить улучшение, создайте
                    <a
                        href="https://github.com/Articus-Company/webasystvue/issues/new/choose"
                        target="_blank"
                    >
                        создайте новый issue
                    </a>
                    в репозитории.
                </p>

                <DocHeading
                    id="create-pr"
                    tag="h2"
                    parent="found-a-bug"
                >
                    Создайте PR
                </DocHeading>

                <p>
                    Если хотите исправить ошибку или добавить новую фичу,
                    вы можете создать pull request.
                </p>

                <DocHeading
                    id="discussions"
                    tag="h2"
                    parent="found-a-bug"
                >
                    Обсуждения
                </DocHeading>

                <p>
                    Вопросы и предложения можно оставить в
                    <a
                        href="https://github.com/Articus-Company/webasystvue/discussions"
                        target="_blank"
                    >
                        Discussions.
                    </a>
                </p>
            </ArticleBody>
        </Article>
    </DocsLayout>
</template>

<script setup lang="ts">
import { Article, ArticleBody } from 'webasystvue'
import { DocHeading } from '@/components/docs/doc-heading'
import { DocsLayout } from '@/layouts'
</script>
