"use client";
 
import { UserProfile } from '@clerk/nextjs';
  
const userpage = () => (
    <div className='flex justify-center'>
    <UserProfile />
    </div>
);
 
export default userpage;