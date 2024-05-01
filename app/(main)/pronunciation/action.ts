"use server"

import { getUserProgress, getUserSubscription } from '@/db/queries';

export const UserProgress = getUserProgress();
export const UserSubscription = getUserSubscription();