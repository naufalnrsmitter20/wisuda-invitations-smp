import { dataSiswa } from "@/app/data/siswa";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { siswa } = dataSiswa;

  return new NextResponse(JSON.stringify(siswa), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST = async () => {
  return new NextResponse("OK", {
    status: 200,
  });
};
