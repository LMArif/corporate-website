import { connectDB } from "@/lib/mongodb";
import ProductGallery from "@/models/buyingHouse/ProductGallery";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function GET() {
  try {
    await connectDB();

    const data = await ProductGallery.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Fetch failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const created = await ProductGallery.create(body);

    return NextResponse.json(
      { success: true, message: "Created", data: created },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Create failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}