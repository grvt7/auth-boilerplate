const { NEXT_PUBLIC_NODE_APP_BASE_URL } = {
  NEXT_PUBLIC_NODE_APP_BASE_URL: process.env.NEXT_PUBLIC_NODE_APP_BASE_URL
};

export const usersUrl = `${NEXT_PUBLIC_NODE_APP_BASE_URL}/api/v1/users`;
