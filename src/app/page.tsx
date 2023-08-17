import axios from "axios";
import RootClient from "./root-client";

const apiKey = process.env.GOOGLE_DEV_API_KEY!;
const placeId = process.env.PLACE_ID!;

export default async function RootPage() {
  const reviewData = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Creview&key=${apiKey}`
  );
  const reviews = reviewData.data.result.reviews;
  return <RootClient reviews={reviews} />;
}
