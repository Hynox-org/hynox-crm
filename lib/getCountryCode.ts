export async function getCountryCode(): Promise<string> {
  try {
    const res = await fetch(process.env.NEXT_COUNTRYCODE_API);
    const data = (await res.json()) as { country_calling_code?: string };
    return data.country_calling_code || "+1";
  } catch (err) {
    console.error("Error fetching country code:", err);
    return "+1";
  }
}
