import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Se recomienda que visites las pagina: https://nextjs.org/docs/advanced-features/middleware para saber del middleware

export async function middleware(request) {
  const jwt = request.cookies.get("mytoken");

  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret")
    );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// ESTE BLOQUE DE CODIGO TE PERMITE PROTEGER MULTIPLES PAGINAS DE LA APLICACION

// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
//   }

export const config = {
  matcher: "/notes.app",
};
