import { useEffect } from "react";
import Video from "~/components/Video/Video";

function Home() {
  // useEffect(() => {
  //   database
  //     .collection("videos")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc);
  //       });
  //     });
  // }, []);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col">
        <Video />
      </div>
    </div>
  );
}

export default Home;
