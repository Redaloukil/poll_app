import React from 'react';
import { Link } from 'react-router-dom';


const PostsList = props => {
    if (!props.polls){
        return (
            <div>Still loading..</div>
        )
    }
    if(props.polls.length === 0){
        return (
            <div>
                <h1>No polls yet..</h1>
            </div>
        )
    }
    return (
        <div className="page" id="posts">
            this.props.polls.map((element , key) =>{
                <div className="posts">
                    <h1><Link to="">{element.title}</Link></h1>
                    
                </div>
            })


            
        </div>
  );
};

export default PostsList;



