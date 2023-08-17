import Airtable from "airtable";
import { NextRequest, NextResponse } from "next/server";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const date = new Date();

const timestamp =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

const addRecordToTable = (
  email,
  company,
  name,
  message,
  address,
  phone,
  source
) =>
  new Promise((resolve, reject) => {
    base("Contacts").create(
      {
        Name: name,
        Company: company,
        Email: email,
        Message: message,
        createdAt: timestamp,
        Address: address,
        Phone: phone,
        Source: source,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        resolve(record.getId());
      }
    );
  });

export async function POST(req: NextRequest, res: NextResponse) {
  const {
    email,
    company = "company name",
    name,
    message,
    address,
    phone,
    source,
  } = JSON.parse(await req.text());

  const clientSecret = req.headers.get("secret");
  const secret = process.env.SITE_SECRET;

  if (!clientSecret || clientSecret !== secret) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    await addRecordToTable(
      email,
      company,
      name,
      message,
      address,
      phone,
      source
    );
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  return new NextResponse("Created", { status: 201 });
}
