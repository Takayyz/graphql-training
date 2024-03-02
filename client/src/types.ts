import type { GetUsersQuery } from "./graphql/generated";

export type Message = GetUsersQuery["users"][number]["messages"][number];
export type User = GetUsersQuery["users"][number];
