import { notFound } from 'next/navigation';
import FriendDetailPage from './FriendDetailPage';

async function getFriend(id) {
  try {
    // 1. Determine the base URL
    // On Vercel, we use the VERCEL_URL. Locally, we fall back to localhost.
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/friends.json`, {
      cache: 'no-store' // Ensures you get fresh data
    });

    if (!res.ok) return null;

    const friends = await res.json();
    return friends.find((f) => f.id === parseInt(id));
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function FriendsDetailPage({ params }) {
  const { friendsId } = await params;
  const friend = await getFriend(friendsId);

  if (!friend) {
    notFound();
  }

  // Passing the fetched friend to the Client Component for interaction
  return <FriendDetailPage friend={friend} />;
}