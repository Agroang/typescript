import * as React from 'react';
import Questionnaire from './Questionnaire';
import Start from './Start';

// have a true false state, on click change state to true, if true
// conditional display the questionnaire component
// the other stuff is rendered if false!

export default function Landing() {
  const [pageTrigger, setPageTrigger] = React.useState(false)

  function handleClick() {
    setPageTrigger(true)
  }

  return (
    { if (pageTrigger === true) {
        return <Questionnaire />
    } else {
        <Start
          handleClick={handleClick}
        />}
    }
  )
}
// state in react/typescript
