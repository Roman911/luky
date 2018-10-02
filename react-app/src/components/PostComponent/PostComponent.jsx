import React, {Component} from 'react';
import axios from "axios";

 class PostComponent extends Component {
   state = {
     post: null
   };

   componentWillMount() {
     axios.get('./post/01.json').then(({data}) => {
       this.setState({post: data})
     })
   }

  render() {
     const post = this.state.post;
     console.log(this.state);
     const pos = !post ? 'lod' : post.map((item, index) => {
       return <div key={index}>
         <h3>{item.title}</h3>
         <p>{item.text}</p>
         <img src={item.img} alt=""/>
       </div>
     });
    return (
      <div >
        { pos }
      </div>
    )
  }
}

export default PostComponent