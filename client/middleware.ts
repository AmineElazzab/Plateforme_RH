import { NextResponse } from 'next/server';

// we are not exporting by default
// @ts-ignore
export async function middleware(req, ev) {
	const token = req ? req.cookies.get('token')?.value : null;
	console.log({token});
	const { pathname } = req.nextUrl;
	const url = req.nextUrl.clone();

	if (token) {
		if (pathname.includes('auth/login')) {
			url.pathname = '/';
			// // console.log('middleware.ts: HAS TOKEN AND TRY TO RE-LOGIN');
			return NextResponse.redirect(url);
		} else {
			// // console.log('middleware.ts: HAS TOKEN');
			return NextResponse.next();
		}
	} else {
		if (pathname.includes('auth/login')) {
			// // console.log('middleware.ts: NO TOKEN && TRIES TO LOGIN');
			return NextResponse.next();
		} else {
			// // console.log('middleware.ts: NO TOKEN && TRIES TO SNEEK');
			url.pathname = '/auth/login';
			return NextResponse.redirect(url);
		}
	}
	// return NextResponse.next();
}

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next).*)',
};