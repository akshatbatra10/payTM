import { PrismaClient } from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return NextResponse.json({
      user: session.user,
    });
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};

export const POST = async () => {
  await new PrismaClient().user.create({
    data: {
      email: "test@gmail.com",
      number: "12345",
      password: "1234",
    },
  });

  return NextResponse.json({
    message: "User created",
  });
};
