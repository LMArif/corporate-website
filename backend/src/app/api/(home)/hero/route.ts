import { connectDB } from "@/lib/mongodb";
import Hero from "@/models/home/Hero";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function GET() {
  try {
    await connectDB();

    const hero = await Hero.findOne().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: hero,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch hero",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
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
        message: "Hero created successfully",
        data: hero,
      },
      {
        status: 201,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create hero",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}