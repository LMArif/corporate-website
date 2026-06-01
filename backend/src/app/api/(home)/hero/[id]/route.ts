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

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const updatedHero = await Hero.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedHero) {
      return NextResponse.json(
        {
          success: false,
          message: "Hero not found",
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
        message: "Hero updated successfully",
        data: updatedHero,
      },
      {
        headers: corsHeaders,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update hero",
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

    const deletedHero = await Hero.findByIdAndDelete(id);

    if (!deletedHero) {
      return NextResponse.json(
        {
          success: false,
          message: "Hero not found",
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
        message: "Hero deleted successfully",
      },
      {
        headers: corsHeaders,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete hero",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}