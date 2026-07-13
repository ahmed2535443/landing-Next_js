"use server";

import { createAdminClient } from "@/utils/supabase/admin";

export async function submitContact(formData: FormData) {
  const supabase = createAdminClient();

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const { error } = await supabase
    .from("contact_requests")
    .insert(data);

  if (error) {
    throw new Error(error.message);
  }
}