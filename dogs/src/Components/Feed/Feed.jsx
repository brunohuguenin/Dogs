import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhooto, setModalPhoto] = React.useState(null);



  return (
    <div>
     {modalPhooto && <FeedModal photo={modalPhooto} setModalPhoto={setModalPhoto}/>}
     <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed
