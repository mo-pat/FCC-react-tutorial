import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const title = 'I Love You to the Moon and Back'
const author = 'Amelia Hepworth'

function BookList() {
  return (
    <section className="booklist">
      <Book title={title} author={author}/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = (props) => {
  const { title, author } = props
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="book cover"/>
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))