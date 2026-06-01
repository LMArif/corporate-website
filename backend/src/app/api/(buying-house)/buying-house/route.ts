import { connectDB } from "@/lib/mongodb";
import BuyingHouse from "@/models/buyingHouse/BuyingHouse";
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

    const data = await BuyingHouse.findOne().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch buying house data",
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
    const data = await BuyingHouse.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Buying House data created successfully",
        data,
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
        message: "Failed to create buying house data",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
