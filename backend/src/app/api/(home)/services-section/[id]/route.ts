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

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const updated = await ServicesSection.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          message: "Services section not found",
        },
        {
          status: 404,
          headers: corsHeaders,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Services section updated successfully",
        data: updated,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("PUT services-section error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update services section",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;

    const deleted = await ServicesSection.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          message: "Services section not found",
        },
        {
          status: 404,
          headers: corsHeaders,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Services section deleted successfully",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("DELETE services-section error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete services section",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}