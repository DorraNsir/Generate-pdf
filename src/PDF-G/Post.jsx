import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PDF from './PDF'
class Post extends Component{
    state={
        title:'',
        content:'',
        image:'',
        postSubmitted:false
    }
    onChange=input=>e=>{
        this.setState({
            [input]:e.target.value
        });
    }
    submit=e=>{
            if(!this.state.title|| !this.state.content){
                alert("all fields are required! ")
                e.preventDefault();
            }else{
                this.setState({
                    postSubmitted:true
                })
            }
    }
    render(){

        return(
            <>
            {!this.state.postSubmitted?
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input onChange={this.onChange('title')} type="email" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title"/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">URL</label>
                        <input onChange={this.onChange('image')} type="text" name="image" className="form-control"  placeholder="url..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">description</label>
                        <input onChange={this.onChange('content')} type="text" name="content" className="form-control"  placeholder="description"/>
                    </div>
                    <button onClick={this.submit} name="postSubmitted" type="submit" className="btn btn-primary">Submit</button>
                    </form>:
                    <PDF title={this.state.title} content={this.state.content} image={this.state.image}/>
    }
            </>
        );
    }
}
export default Post;