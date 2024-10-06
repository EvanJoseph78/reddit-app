
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/student/(.*)'
]);

const isLoginRoute = createRouteMatcher([
  '/api/auth/sign-in', // ou a rota correspondente ao login
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  // Verifica se a rota é a de login
  if (isLoginRoute(req)) {
    const { method } = req;

    // Se o método for POST, significa que um usuário está fazendo login
    if (method === 'POST') {
      console.log('Um usuário está fazendo login');
    }
  }

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
