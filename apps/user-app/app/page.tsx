import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>Hi there</div>
    </div>
  );
}
