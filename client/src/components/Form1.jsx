import React from 'react'

const Form1
 = () => {
  return (
    <div>
        <form className='bg-success'>
          
            <label htmlFor="color"> Color</label>
            <input type='color' name="color" />
            <label htmlFor ="tabLength"> Tab Length</label>
            <input type="number" name='tabLength' />
            <label htmlFor="tabWight">Tab Width</label>
            <input type="number" name="tabWidth" />
<button type="button" className="btn btn-primary">Submit</button>

        </form>
    </div>
  )
}

export default Form1;
