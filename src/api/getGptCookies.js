import { supabase } from "@/lib/supabaseClientttttttttt";

// Declare cardData and cookieData as part of the exported functions or store them in a closure
export async function cardDataHandler(req, res) {
  try {
    // Fetch data from the 'cardData' table
    const { data, error } = await supabase.from("cardData").select("*");

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

// Fetch cookie data
export async function cookieDataHandler(req, res) {
  try {
    // Fetch data from the 'cookieData' table
    const { data, error } = await supabase.from("cookieData").select("*");

    if (error) {
      console.error("Error fetching cookie data:", error.message);
      return res.status(400).json({ error: error.message });
    }

    const cookieData = Array.isArray(data) ? data : [];
    console.log("Fetched cookie data:", cookieData);

    return cookieData;
    // Return the data as a JSON response
    // return res.status(200).json({ cookieData });
  } catch (err) {
    console.error("Unexpected error in cookieDataHandler:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default {
  cardDataHandler,
  cookieDataHandler,
};


