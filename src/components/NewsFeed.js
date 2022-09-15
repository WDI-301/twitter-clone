import { useState } from "react";

const NewsFeed = (props) => {

  const { user } = props;

  const [ postBox, setPostBox ] = useState('');

  const [listOfPost, setListOfPost] = useState([]);

  return (
    <div>
      <div>
        <textarea value={postBox} onChange={(event) => setPostBox(event.target.value)}/>
      </div>
      <div>
        <button onClick={() => setListOfPost([...listOfPost, { id: listOfPost.length, content: postBox }])} >Post</button>
      </div>
      <div>
        {listOfPost.map((post, index) => (
          <div key={index}>
            <div>
                {user.userName}
            </div>
            <div>
                <img
                src={user.profilePhotoUrl}
                style={{width: '50px', height: '50px', objectFit: 'cover'}}
                />
            </div>
            <div>
                {post.content}
            </div>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default NewsFeed;