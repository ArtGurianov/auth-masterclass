"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatatedFields = ResetSchema.safeParse(values);
  if (!validatatedFields.success) {
    return { error: "Invalid email!" };
  }
  const { email } = validatatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser?.email) {
    return { error: "Email does not exist!" };
  }

  const resetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    resetToken.email,
    resetToken.token,
  );

  return { success: "Reset email sent!" };
};
