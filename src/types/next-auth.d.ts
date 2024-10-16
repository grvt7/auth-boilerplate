// import { User } from 'next-auth';

// type UserType = {
//   id: string;
//   username?: string;
//   fullname?: string;
//   email?: string;
//   accessToken?: string;
//   refreshToken?: string;
// };

// export interface CredentialsResponseInterface extends User {
//   user?: UserType;
// }
// // User this to make the entire module aware of it

import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    _id?: string;
    username?: string;
    fullname?: string;
    email?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user: {
      _id?: string;
      username?: string;
      fullname?: string;
      email?: string;
      accessToken?: string;
      refreshToken?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string;
    username?: string;
    fullname?: string;
    email?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}
