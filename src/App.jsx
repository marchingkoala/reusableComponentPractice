import './App.css'
import Container from './Container'
import data from './blog.json'

function App() {
  const article = data.article
  const recipe = data.recipe
  return (
    <>
      <h1>Reusable Component Practice</h1>
      <div className='mainContainer'>
      <Container image={recipe.image} priorityTitle={recipe.title} duration={recipe.duration}/>
      <div className='innerContainer'>
        {article .map((el, ind)=>{
          return(
            <Container key={ind}
              enableButton='false' 
              variant='secondary'
              image={el.image}
              priorityTitle={el.title}
              secondaryTitle={el.secondary}
              createdBy={el.createdBy}
            />
          )
        })}
      </div>
      </div>
      <p className="read-the-docs">
        This is to practice building a reusable component
      </p>
    </>
  )
}

export default App
