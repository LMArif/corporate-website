import { connectDB } from "@/lib/mongodb";
import Hero from "@/models/Hero";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const hero = await Hero.find();

    return NextResponse.json({
      success: true,
      data: hero,
    });
  } catch (error) {
    console.error("GET /api/hero error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch hero data",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const hero = await Hero.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Hero saved successfully",
        data: hero,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/hero error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save hero data",
      },
      { status: 500 }
    );
  }
}