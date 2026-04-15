import { notFound } from 'next/navigation';
import FriendDetailClient from './FriendDetailPage';
import FriendDetailPage from './FriendDetailPage';


async function getFriend(id) {
  const res = await fetch(`https://keen-keeper-ruddy-three.vercel.app/api/friends`);
  const friends = await res.json();
  return friends.find((f) => f.id === parseInt(id));
}

export default async function FriendsDetailPage({ params }) {
  const { friendsId } = await params;
  const friend = await getFriend(friendsId);

  if (!friend) {
    notFound();
  }

  return <FriendDetailPage friend={friend} />;
}