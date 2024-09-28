import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { auth, db } from "@/firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import Post from "./Post";
import { onAuthStateChanged } from "firebase/auth";

export default function FeedComponent() {

  const params = useLocalSearchParams().user;

  const [feed, setFeed] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchFeed();
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
    }, []);

  const fetchFeed = async () => {
    const userUid = auth.currentUser?.uid;
    if (!userUid) {
      console.error("User authentication not recognized.");
      setLoading(false);
      return;
    }
    console.log("userUID", userUid);
    const friendsDocRef = doc(db, 'Friends', userUid);
    console.log("weeeeeeeeeeeefff", friendsDocRef);
    const friendsDocSnap = await getDoc(friendsDocRef);

    console.log("weeeeeeeeeeee", friendsDocSnap);

    if (friendsDocSnap.exists() && friendsDocSnap.data().friends.length > 0) {
      const friends = friendsDocSnap.data().friends;
      console.log("aw", friends)
      const friendsPostsPromises = friends.map((friend: { uid: unknown; }) => {
        const q = query(collection(db, 'Posts'), where('author', '==', friend.uid));
        return getDocs(q);
      });
      console.log("aw2")
      const friendsPostsSnapshots = await Promise.all(friendsPostsPromises);
      console.log("aw3")
      const friendsPosts = friendsPostsSnapshots.map(snapshot => {
        // Assuming you want to extract all document data into an array
        return snapshot.docs.map((doc: { data: () => any; }) => doc.data());
      }).flat();

      console.log("waaaaaaaaaaaa", friendsPosts);

    setFeed(friendsPosts.sort((a, b) => b.timestamp - a.timestamp));
    setLoading(false);
    }
    else if (!friendsDocSnap.exists()) {
      // create a new friends doc todo
    }
  };

  const displayList = feed
  // .filter(x => !unreadOnly || x.isUnread) can filter here later
  // .filter(x => !starredOnly || x.starred)
  .map(element => <Post key={element.title} {...element} />);

  return (
    <View>
      <Text>Feedd</Text>
      {displayList}
      {displayList.length === 0 && !loading && <Text>No posts to display. Click here to add your first friend.</Text>}
      {/* todo add button */}
    </View>
  );
}
