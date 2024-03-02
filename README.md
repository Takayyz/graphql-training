# graphql-training
GraphQLの学習用

## What i worked on
- [x] [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
  - The Schema Definition Language(SDL)
- [ ] [Build a Fully Type-Safe Application with GraphQL, Prisma & React](https://www.prisma.io/blog/series/e2e-typesafety-graphql-react-yiw81oBkun)
  - The tutorial above is slightly outdated and recommended to check this one
  - Chapter3の注意点
    - `@graphql-yoga/node`はdeprecatedなので、代わりに`graphql-yoga`をインストール
  - Chapter4の注意点
    - `main.tsx`の`createClient`で`exchanges`プロパティを設定しないと型エラーになる
    - `exchanges`の型は`Exchange[]`だが、この配列に`fetchExchange`を渡さないとデータがfetchされない

> Prisma will generate types based off of your database schema.
Pothos will use those types to expose GraphQL types via an API.
GraphQL Codegen will read your GraphQL schema and generate types for your frontend codebase representing what is available via the API and how to interact with it.
