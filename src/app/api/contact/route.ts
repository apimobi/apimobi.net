import { NextResponse, NextRequest } from "next/server";
// import Cors from "cors";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// const cors = Cors({
//     methods: ["POST", "GET", "HEAD"],
//   });

// function runMiddleware(
// req: NextApiRequest,
// res: NextApiResponse,
// fn: Function,
// ) {
// return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//     if (result instanceof Error) {
//         return reject(result);
//     }

//     return resolve(result);
//     });
// });
// }

export async function POST(request:NextRequest) {

    // await runMiddleware(req, res, cors);
    const { email } = await request.json();
    console.log(request);

    return NextResponse.json({ message: 'Hello from Next.js! '+email })
}

export async function GET(request:NextRequest) {

  console.log(request);

  return NextResponse.json({ message: 'youpi' })
}