import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest) {
  try {
    const posts = await prisma.newPost.findMany();
    NextResponse.json({ posts: posts, ok: true }, {
      status: 200,
    } as ResponseInit);
  } catch (error) {
    NextResponse.json({ error: error, ok: false }, {
      status: 500,
    } as ResponseInit);
  } finally {
    prisma.$disconnect();
  }
}

export async function POST(req: NextApiRequest) {
  try {
    const {
      title,
      userId,
      body,
    }: { title: string; userId: number; body: string } = req.body;
    const post = await prisma.newPost.create({
      data: {
        title: title,
        userId: userId,
        body: body,
      },
    });
    NextResponse.json({ post: post, ok: true }, {
      status: 200,
    } as ResponseInit);
  } catch (error) {
    NextResponse.json({ error: error, ok: false }, {
      status: 500,
    } as ResponseInit);
    return;
  } finally {
    prisma.$disconnect();
  }
}

export async function PUT(req: NextApiRequest) {
  try {
    const {
      postId,
      newTitle,
      newUserId,
      newBody,
    }: {
      newTitle: string;
      newUserId: number;
      newBody: string;
      postId: number;
    } = req.body;
    const post = await prisma.newPost.update({
      where: {
        id: postId,
      },
      data: {
        title: newTitle,
        userId: newUserId,
        body: newBody,
      },
    });
    NextResponse.json({ post: post, ok: true }, {
      status: 200,
    } as ResponseInit);
  } catch (error) {
    NextResponse.json({ error: error, ok: false }, {
      status: 500,
    } as ResponseInit);
    return;
  } finally {
    prisma.$disconnect();
  }
}

export async function DELETE(req: NextApiRequest) {
  try {
    const { postId }: { postId: number } = req.body;
    const post = await prisma.newPost.delete({
      where: {
        id: postId,
      },
    });
    NextResponse.json({ post: post, ok: true }, {
      status: 200,
    } as ResponseInit);
  } catch (error) {
    NextResponse.json({ error: error, ok: false }, {
      status: 500,
    } as ResponseInit);
    return;
  } finally {
    prisma.$disconnect();
  }
}
