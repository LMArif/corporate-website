import { connectDB } from "@/lib/mongodb";
import Hero from "@/models/Hero";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
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
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Hero updated successfully",
      data: updatedHero,
    });
  } catch (error) {
    console.error("PUT /api/hero/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update hero",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: Params) {
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
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Hero deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/hero/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete hero",
      },
      { status: 500 }
    );
  }
}