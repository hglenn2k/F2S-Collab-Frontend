export function UmamiAnalytics() {
  // Use environment variables without fallbacks for security
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  // Only render the script if both environment variables are defined
  if (!umamiUrl || !umamiWebsiteId) {
    console.warn('Umami Analytics is not configured. Please set NEXT_PUBLIC_UMAMI_URL and NEXT_PUBLIC_UMAMI_WEBSITE_ID environment variables.');
    return null;
  }

  return (
      <script
          defer
          src={umamiUrl}
          data-website-id={umamiWebsiteId}
      />
  );
}