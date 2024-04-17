import React from 'react'

const Feedback = () => {
  return (
    <div className='hrsp'>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Feedback Form</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="containerfeed">
    <h2 className='feed'>Feedback Form</h2>
    <form action="#">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" required="" defaultValue={""} />
      <input type="submit" className='feedbut' defaultValue="Submit" />
    </form>
  </div>

    </div>
  )
}

export default Feedback