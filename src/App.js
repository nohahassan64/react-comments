import React from 'react'
import CommentDetails from './CommentDetails'
import faker from 'faker'
import ApprovelCard from './ApprovelCard'


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCard>
        <div>
          <h4>Warning!!!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovelCard>
      <ApprovelCard>
        <CommentDetails 
          avatar={faker.image.avatar()}
          author="Ahmed"
          time="Today at 6:00"
          content="Nice Blog Post!"
        />
      </ApprovelCard>
      
       <ApprovelCard>
        <CommentDetails 
          avatar={faker.image.avatar()}
          author="Noha"
          time="Today at 8:00"
          content="I like this subject"
        />
       </ApprovelCard>
       
       <ApprovelCard>
        <CommentDetails 
          avatar={faker.image.avatar()}
          author="Mahmoud"
          time="Today at 2:00"
          content="I am writing"
        />
       </ApprovelCard>

       <ApprovelCard>
        <CommentDetails 
          avatar={faker.image.avatar()}
          author="Hassan"
          time="Today at 10:00"
          content="Nice Blog Post!"
        />
       </ApprovelCard>
      
    </div>
  )
}

export default App
