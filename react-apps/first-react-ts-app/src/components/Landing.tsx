import * as React from 'react';
import Questionnaire from './components/Questionnaire';

// have a true false state, on click change state to true, if true
// conditional display the questionnaire component
// the other stuff is rendered if false!

export default function Landing() {
  const [pageTrigger, setPageTrigger] = React.useState(false)

  function handleClick() {
    setPageTrigger(true)
  }

  return (
    <div>
      <h1>El Questionator</h1>
      <p>The hardest and awesomest questions ever!</p>
      <button onClick={handleClick}>Start Quizzing</button>
    </div>
  )
}
