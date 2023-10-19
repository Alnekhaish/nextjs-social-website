import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const req = await request.json();
  const username = req.username;
  const password = req.password;

  try {
    const response = await axios.post(
      "http://express-social-website.vercel.app/login",
      {
        username: username,
        password: password,
      },
    );
    if (response.status === 200) {
      const date = new Date();
      date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

      return NextResponse.json(
        { message: "Success" },
        {
          status: 200,
          headers: {
            "Set-Cookie": `token=${
              response.data.token
            }; Expires=${date.toUTCString()}; Path=/`,
          },
        },
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed",
      },
      {
        status: 404,
      },
    );
  }
}
