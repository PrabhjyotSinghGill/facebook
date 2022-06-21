import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <Post
        key="1"
        name="Gill"
        message="Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate."
        email="f@g.com"
        timestamp="9:00am"
        image="/gill.jpg"
        postImage="/c.jpg"
      ></Post>
      <Post
        key="2"
        name="Bill Gates"
        message="In addition to his work at Microsoft, Gates was also known for his charitable work. With his then wife, Melinda, he launched the William H. Gates Foundation (renamed the Bill and Melinda Gates Foundation in 1999) in 1994 to fund global health programs as well as projects in the Pacific Northwest. During the latter part of the 1990s, the couple also funded North American libraries through the Gates Library Foundation (renamed Gates Learning Foundation in 1999) and raised money for minority study grants through the Gates Millennium Scholars program. "
        email="billgates@microsoft.com"
        timestamp="9:00am"
        image="/bg.webp"
        postImage="/bill.jpeg"
      ></Post>
      <Post
        key="3"
        name="Jeff Bezoz"
        message="Amazon founder Jeff Bezos was spotted celebrating Father's Day with his girlfriend Lauren Sanchez in Los Angeles, California. The billionaire, 58, and his girlfriend enjoyed a laid-back dinner to commemorate the special holiday at the A-list restaurant Nobu, often frequented by the likes of Kylie Jenner, Megan Fox, and Justin Bieber. "
        email="jeff@amazon.com"
        timestamp="9:00am"
        image="/jf.jpg"
        postImage="/jeff.jpg"
      ></Post>
    </div>
  );
}

export default Posts;
