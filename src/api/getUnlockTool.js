// import { supabase } from "@/lib/supabaseClient";
import { createClient } from "@/app/utils/supabase/client";

const supabase = createClient(); 
// Declare cardData and AllTools as part of the exported functions or store them in a closure
export async function cardDataHandler(req, res) {
  try {
    // Fetch data from the 'cardData' table
    const { data, error } = await supabase.from("toolCard").select("*");

    if (error) {
      console.error("Error fetching card data:", error.message);
      return res.status(400).json({ error: error.message });
    }

    const cardData = Array.isArray(data) ? data : [];
    console.log("Fetched card data:", cardData);
    return cardData;
    // Return the data as a JSON response
    // return res.status(200).json({ cardData });
  } catch (err) {
    console.error("Unexpected error in cardDataHandler:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Fetch UnlockTooldata
export async function unlockToolDataHandler(req, res) {
  try {
    // Fetch data from the 'cookieData' table
    const { data, error } = await supabase.from("UnlockTools").select("*");

    if (error) {
      console.error("Error fetching cookie data:", error.message);
      return res.status(400).json({ error: error.message });
    }

    const unlockToolData = Array.isArray(data) ? data : [];
    console.log("Fetched cookie data:", unlockToolData);

    return unlockToolData;
    // Return the data as a JSON response
    // return res.status(200).json({ cookieData });
  } catch (err) {
    console.error("Unexpected error in UnlockDataHandler:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default {
  cardDataHandler,
  unlockToolDataHandler,
};
