export const revalidate = 0
import prisma from '@/db'
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


export async function POST(request: Request) {
  const body = await request.json();
  const user = await prisma.user.findUnique({
    where: { name: body.username }
  });
 
  if (user) {
    if (bcrypt.compareSync(body.password, user.password)) {
      const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
        expiresIn: '1m',
      })
      // const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
      const maxAge = 1 * 24 * 60 * 60; // 1 day in seconds

      const headers = new Headers();
      headers.append('Set-Cookie', `token=${token}; Path=/; Max-Age=${maxAge}`);
      headers.append('Set-Cookie', `name=${user.name}; Path=/; Max-Age=${maxAge}`);
      headers.set('Content-Type', 'application/json');

      return new Response(
        JSON.stringify({ success: true, desc: 'Амжилттай нэвтэрлээ.' }), // Example JSON response
        {
          status: 200,
          headers,
        }
      );
    }
    return Response.json({
      success: false,
      desc: 'Нууц үг буруу.'
    });
  }
  return Response.json({
    success: false,
    desc: 'Хэрэглэгч олдсонгүй.'
  });
}