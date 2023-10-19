import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const req = await request.json();
  const email = req.email;
  const username = req.username;
  const firstname = req.firstname;
  const lastname = req.lastname;
  const password = req.password;

  try {
    const response = await axios.post(
      "https://express-social-website.vercel.app/signup",
      {
        email: email,
        username: username,
        firstname: firstname,
        lastname: lastname,
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
