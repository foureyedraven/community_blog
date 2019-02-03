import React, { Component } from 'react'

const defaultState = {
  title:'',
  body:'',
  timeStamp:'',
  author:'',
  posts:[]
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.updateText = this.updateText.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  updateText(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onButtonClick(){
    const {posts} = this.state

    if (posts.length === 0) {
      this.setState({
        posts: [this.state.title]
      })
    } else {
      this.setState({
        posts:  [...posts, this.state.title]
      })
    }
  }

	render() {
		return (
			<div className="container-fluid h-100p">
				<div className="row justify-content-center bg-gray--lighter" style={{height:'inherit'}}>
					<div className="col-lg-10">
            <div>
            <h1>Community Blog</h1>
            <h3>Write a blog post to share with the community</h3>
            </div>
            <div className="blog-form">
              <input type="text" name="title" value={this.state.title} onChange={this.updateText} placeholder="your title" />
              <input type="textarea" name="body" value={this.state.body} onChange={this.updateText} placeholder="start writing your post" />
              <input type="text" name="author" value={this.state.author} onChange={this.updateText} placeholder="your name" />
              <div>{Date(Date.UTC)}</div>
              <button type="submit" className="button teal cursor-pointer" onClick={this.onButtonClick}>Submit</button>
              </div>
            <div className="posts-list">
              { this.state.posts.length > 0 && this.state.posts.map((post, i) => <div key={i}>{post}</div>)}
            </div>
					</div>
				</div>
			</div>
		)
	}
}

export default (App)
