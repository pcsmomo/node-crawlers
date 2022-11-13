import axios from "axios";
import * as cheerio from "cheerio";

console.log("Cheerio Crawler started");

const fetchHtml = async (url) => {
  const response = await axios(url);

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }

  const html = response.data;
  return html;
};

export const main = async (url) => {
  console.log("Fetching...");
  const html = await fetchHtml(url);

  console.log("Parsing by Cheerio...");
  const $ = cheerio.load(html);

  console.log($.html());
};

const TARGET_URL = "https://www.udemy.com/course/completefastapi/";
main(TARGET_URL);
