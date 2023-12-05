import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // console.log(await page.goto("https://pptr.dev/"));

  console.log("chegou na api");

  return NextResponse.json({
    status: 200,
    mensagem: "deu bom!",
  });
}
