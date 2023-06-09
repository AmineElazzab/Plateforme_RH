import { useState } from 'react';
import Head from 'next/head';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import JWTToken from '~lib/token';
import { signIn, useSession } from 'next-auth/react';

import { LoginInputs, loginSchema } from '~lib/validation/auth';
import { ErrorMessage, Input, Modal, Button, Container, Divider, Checkbox } from '~components/ui';
import { redirectUser } from '~utils/utils';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [err, setErr] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // const [method, setMethod] = useState("email");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (inputs: LoginInputs) => {
    const { ok, error } = await signIn('credentials', { ...inputs, redirect: false });

    if (ok) {
      console.log({ error });
    }
    if (error) {
      setErr(error);
      return;
    }
  };
  if (session) {
    // @ts-ignore
    JWTToken.store(session?.token);
    // @ts-ignore

    redirectUser(session?.user.user_role_id, router);
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container className="bg-[url('/assets/bg/Harmony-background.jpeg')] m-0.5  inset-0 bg-no-repeat bg-cover z-[1]  bg-left">
        <div className="flex flex-col justify-center items-center py-8 px-10 h-screen ">
          <div className=" z-[10] w-96  p-4 bg-light-white-50/[.95]   rounded-lg border-2 border-red-100">
            <div className="p-3 text-center text-neutral-800 text-2xl font-black">Connexion</div>

            <div className="flex flex-row my-2">
              <div className="p-1 w-full hidden sm:block" aria-hidden="true">
                <div className="py-3">
                  <div className="border-t border-gray-400"></div>
                </div>
              </div>

              <div className="p-2 flex justify-center">
                {/* <Divider /> */}
                <div className="text-xs text-center text-gray-500 whitespace-nowrap">
                  Entrez votre adresse mail et mot de passe
                </div>
                {/* <Divider /> */}
              </div>

              <div className="p-1 w-full hidden sm:block" aria-hidden="true">
                <div className="py-3">
                  <div className="border-t border-gray-400"></div>
                </div>
              </div>

              {/* Connexion Head  */}
            </div>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <ErrorMessage message={err} />

                {/* Email  */}
                <Input
                  labelClasses="text-gray-950 text-base"
                  name="email"
                  label="E-mail"
                  placeholder="@mail.com ..."
                  register={register}
                  error={errors.email?.message}
                />

                {/* Password  */}
                <Input
                  labelClasses="text-gray-950 text-base"
                  label="Mot de Passe"
                  placeholder="Mot de Passe ..."
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  register={register}
                  error={errors.password?.message}
                />

                <div className="text-sm my-2 p-2 flex justify-between mt-2">
                  <div className="flex items-center space-x-1.5">
                    <input
                      aria-label="hi"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="rounded-[2px] border-gray-400 text-main-yellow-200 focus:ring-amber-500"
                    />
                    <label className="text-gray-700">Se rappeler de moi</label>
                  </div>

                  <div className="text-sky-600">
                    <Link href="">Mot de passe oublié ?</Link>
                  </div>
                </div>
              </Stack>

              <Button variant="primary" className="mt-8 mb-2 w-full">
                Connexion
              </Button>
            </form>

            <p className="text-sm text-gray-400 text-center my-3 py-2">2023 © Harmony Technology</p>
          </div>

          <Image
            src="/assets/logos/harmony-logo.svg"
            alt="logo"
            className="absolute bottom-2 left-3 first-letter:object-contain w-28 opacity-80 z-[2]"
            width={100}
            height={100}
          />

          <span className="absolute bottom-2 right-3 text-xs text-slate-50">Version: 1.0.0.1</span>
        </div>
      </Container>
    </>
  );
};

// Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
