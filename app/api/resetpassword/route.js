import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const req = await request.json();
  const username = req.username;
  const password = req.password;

  try {
    const response = await axios.post(
      "https://express-social-website.vercel.app/resetpassword",
      {
        username: username,
        password: password,
      },
    );
    if (response.status === 200) {
      return NextResponse.json(
        { message: "Success" },
        {
          status: 200,
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
