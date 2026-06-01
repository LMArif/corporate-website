import { connectDB } from "@/lib/mongodb";
import ServicesSection from "@/models/home/ServicesSection";
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

    const data = await ServicesSection.findOne().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("GET services-section error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch services section",
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
    const created = await ServicesSection.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Services section created successfully",
        data: created,
      },
      {
        status: 201,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("POST services-section error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create services section",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}