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

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const updated = await ProductGallery.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(
      { success: true, data: updated },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;

    await ProductGallery.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Deleted" },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}