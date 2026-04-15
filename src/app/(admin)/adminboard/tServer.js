// server/unlockTools.js
import { createClient } from "@/app/utils/supabase/client";

const supabase = createClient();

export async function fetchUnlockTools() {
  const { data, error } = await supabase.from("UnlockTools").select("*");
  if (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
  return data;
}

export async function updateUnlockTool(id, updatedData) {
  const { error } = await supabase.from("UnlockTools").update(updatedData).eq("id", id);
  if (error) {
    console.error("Error updating data:", error.message);
    return false;
  }
  return true;
}

// client/components/UnlockToolsTable.js