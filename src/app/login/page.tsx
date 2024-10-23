'use client';

import { logger } from '@/utils/logger';
import {
  Button,
  Checkbox,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
// import * as yup from 'yup';

const Login = () => {
  const router = useRouter();
  const initialValues = {
    usernameOrEmail: '',
    password: '',
    rememberMe: false,
  };
  // const validationSchema = yup.object({
  //   usernameOrEmail: yup
  //     .string()
  //     .required('Username or Email is required')
  //     .test(
  //       'username or email',
  //       'Must be a valid email or username',
  //       function (value) {
  //         const isEmail = yup.string().email().isValidSync(value);
  //         const isUsername = yup
  //           .string()
  //           .min(3, 'Username too short')
  //           .isValidSync(value);
  //         return isEmail || isUsername;
  //       }
  //     ),
  //   password: yup
  //     .string()
  //     .min(8, 'Password must be at least 8 characters long')
  //     .required('Password is required')
  // });

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const isEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };

      const { usernameOrEmail, password } = values;
      const credentials = {
        username: isEmail(usernameOrEmail) ? undefined : usernameOrEmail,
        email: isEmail(usernameOrEmail) ? usernameOrEmail : undefined,
        password,
      };
      const result = await signIn('credentials', {
        ...credentials,
      });

      if (result?.error) {
        logger.info('result', result);
        console.error(result.error);
      } else {
        router.replace('/');
      }
    },
  });
  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-4 md:h-[70%] md:w-[40%] py-4">
        {/* Header */}
        <h2 className="text-4xl font-bold px-4">Log in</h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="px-4">
          <div>
            <TextInput
              label="Email address or Username"
              placeholder="Username or email is required"
              value={formik.values.usernameOrEmail}
              onChange={(e) =>
                formik.setFieldValue('usernameOrEmail', e.target.value)
              }
              className="py-4 "
              size="md"
              error={formik.errors.usernameOrEmail as string}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              size="md"
              onChange={(e) => formik.setFieldValue('password', e.target.value)}
              error={formik.errors.password as string}
            />
          </div>

          <Checkbox
            label="Rmember Me"
            className="my-2"
            checked={formik.values.rememberMe}
            key="rememberMe"
            name="rememberMe"
            onChange={() =>
              formik.setFieldValue('rememberMe', !formik.values.rememberMe)
            }
          />
          <div className="mt-8 mb-1">
            <Text size="xs">
              By continuing, you agree to the <span>Terms of use</span> and
              <span> Privacy Policy.</span>
            </Text>
          </div>
          {/* Button-Login */}
          <div>
            <Button fullWidth radius={'xl'} type="submit">
              Login
            </Button>
          </div>
        </form>

        {/* Forgot Password - Reegister */}
        <div className="text-center mt-4 underline">
          <a href="">Forgot your password</a>
        </div>

        <div className="flex justify-center gap-1">
          <span className="lg:text-[1reem]">Dont have an acount?</span>
          <a href="" className="underline">
            Sign Up
          </a>
        </div>
        {/* OAuth */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;
