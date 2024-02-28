import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { DateResolver } from "graphql-scalars";
import { prisma } from "./db";

import type PrismaTypes from "@pothos/plugin-prisma/generated";

type Scalars = {
    Date: {Input: Date; Output: Date};
};

export const builder = new SchemaBuilder<{
  Scalars: Scalars;
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.addScalarType('Date', DateResolver, {});

builder.queryType({});
