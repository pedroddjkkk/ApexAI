import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");
  // await page.screenshot({ path: "example.png" });

  let pageContent = await page.content();

  // Encontra índices das tags <head> e </head>
  const startIndex = pageContent.indexOf("<!DOCTYPE html>");
  const endIndex = pageContent.indexOf("</head>");

  // Salva o conteúdo da tag <title>
  const titleMatch = pageContent.match(/<title>(.*?)<\/title>/);
  const pageTitle = titleMatch ? titleMatch[1] : "";

  // Salva o conteúdo da tag <meta name="description">
  const descriptionMatch = pageContent.match(
    /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/
  );
  const descriptionContent = descriptionMatch ? descriptionMatch[1] : "";

  // Remove o conteúdo entre as tags <head> e </head>
  if (startIndex !== -1 && endIndex !== -1) {
    const headContent = pageContent.substring(
      startIndex + "<!DOCTYPE html>".length,
      endIndex
    );
    pageContent = pageContent.replace(
      `<!DOCTYPE html>${headContent}</head>`,
      `${pageTitle}<meta name="description" content="${descriptionContent}">${headContent}`
    );
  }

  console.log(pageContent);

  await browser.close();

  return NextResponse.json({
    status: 200,
    mensagem: "deu bom!",
  });
}
