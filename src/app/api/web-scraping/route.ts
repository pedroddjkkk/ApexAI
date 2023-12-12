import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const site = body.site;

  if (!site) {
    return NextResponse.json(
      { message: "Campo vazio" },
      {
        status: 401,
      }
    );
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let response;

  try {
    response = await page.goto(site);
  } catch (error) {
    console.error("Erro ao acessar o site:", error);
    return NextResponse.json(
      { message: "Erro ao acessar o site" },
      {
        status: 500,
      }
    );
  }

  let pageContent = await page.content();
  // console.log(pageContent)

  // console.log(response);
  // await page.screenshot({ path: "example.png" });

  // Salva a descrição que vai estar na tag do <meta> com o parâmetro name="description"
  const descriptionContent = await page.evaluate(() => {
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    return metaDescriptionTag ? metaDescriptionTag.getAttribute("content") : "";
  });

  // Salva o conteúdo da tag <title>
  const titleMatch = pageContent.match(/<title>(.*?)<\/title>/);
  const pageTitle = titleMatch ? titleMatch[1] : "";

  const $ = cheerio.load(pageContent);
  const textContent = $("body").text();

  console.log(textContent);

  await browser.close();

  return NextResponse.json(
    {
      message: "Joinha",
    },
    { status: 200 }
  );
}
