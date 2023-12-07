import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");
  // await page.screenshot({ path: "example.png" });

  // Use o método evaluate para obter o conteúdo da meta description
  const descriptionContent = await page.evaluate(() => {
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    return metaDescriptionTag ? metaDescriptionTag.getAttribute("content") : "";
  });

  let pageContent = await page.content();

  // Encontra índices das tags <head> e </head>
  const startIndex = pageContent.indexOf("<!DOCTYPE html>");
  const endIndex = pageContent.indexOf("</head>");

  // Salva o conteúdo da tag <title>
  const titleMatch = pageContent.match(/<title>(.*?)<\/title>/);
  const pageTitle = titleMatch ? titleMatch[1] : "";

  // Remove o conteúdo entre as tags <head> e </head>
  if (startIndex !== -1 && endIndex !== -1) {
    const headContent = pageContent.substring(
      startIndex + "<!DOCTYPE html>".length,
      endIndex
    );
    pageContent = pageContent.replace(
      `<!DOCTYPE html>${headContent}</head>`,
      `Nome:${pageTitle};DescricaoHead:${descriptionContent}${headContent}`
    );
  }

  console.log(pageContent);

  await browser.close();

  return NextResponse.json(
    {
      nome: pageTitle,
      descricaoHead: descriptionContent,
    },
    { status: 200 }
  );
}
