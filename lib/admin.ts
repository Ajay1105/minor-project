import { auth } from "@clerk/nextjs";

export const getIsAdmin = () => {
  const { userId } = auth();
  //console.log(userId); // uncomment this line to see the userId in the console
  const adminIds = process.env.CLERK_ADMIN_IDS.split(", "); // stored in .env.local file as string separated by comma(,) and space( )

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
