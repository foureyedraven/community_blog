import React, { Component } from 'react'

const defaultState = {
  title:'',
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
    const list = this.state.posts

    this.setState({
      posts:  [...list, this.state.title]
    })
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
              <button type="submit" className="button teal cursor-pointer" onClick={this.onButtonClick}>Submit</button>
              </div>
            <div className="posts-list">
              {this.state.posts.map((post, i) => <div key={i}>{post}</div>)}
            </div>
					</div>
				</div>
			</div>
		)
	}
}

export default (App)
