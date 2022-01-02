import * as React from 'react';

export default function Start(props: any) {
  return (
    <div>
      <h1>El Questionator</h1>
      <p>The hardest and awesomest questions ever!</p>
      <button onClick={props.handleClick}>Start Quizzing</button>
    </div>
  )
}
