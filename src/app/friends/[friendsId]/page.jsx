import { notFound } from 'next/navigation';
import FriendDetailClient from './FriendDetailPage';


async function getFriend(id) {
  const res = await fetch(`http://localhost:3000/friends.json`);
  const friends = await res.json();
  return friends.find((f) => f.id === parseInt(id));
}

export default async function FriendsDetailPage({ params }) {
  const { friendsId } = await params;
  const friend = await getFriend(friendsId);

  if (!friend) {
    notFound();
  }

  return <FriendDetailClient friend={friend} />;
}