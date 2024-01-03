import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const confirmation = await db.twoFactorConfirmation.findUnique({ where: { userId } });
    return confirmation;
  } catch {
    return null;
  }
}
