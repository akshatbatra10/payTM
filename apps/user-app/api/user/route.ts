import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const POST = async () => {
  await client.user.create({
    data: {
      email: "test@gmail.com",
    },
  });

  return NextResponse.json({
    message: "User created",
  });
};
