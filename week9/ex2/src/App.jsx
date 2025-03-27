import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm(); //useForm returns a object with a register and handleSubmit property
  function getFormData(data) {
    console.log("form data", data);
  }
    console.log("errors", errors);


  return (
    <div>
    <h1>Alpaca Fan Club</h1>
    <form onSubmit={handleSubmit(getFormData)}> 
      <fieldset>
        <legend>Personal Data</legend> 
        <div className='form-group'>
          <label htmlFor='firstName'> First Name </label>
          <input type="text" id="firstName"{...register("firstName", {required: true})}/>
          {errors.firstName ? (<p className="error">You need a first name.</p>): <></>}
        </div>
        <div className="form-group">
          <label>Last Name </label>
          <input {...register("lastName")} />
        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input {...register("streetAddress", {required: true})} />
          {errors.streetAddress ? (<p className="error">You need a street address.</p>): <></>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state" {...register("state")}>
            <option value="CO">Colorado</option>
            <option value="ID">Idaho</option>
            <option value="MN">Minnestoa</option>
          </select>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input {...register("country")} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Alpaca Preferences</legend>
        <div className="form-group">
          <p>Favorite Alpaca Color</p>
          <label>Red <input type="checkbox" value="red" {...register("favColor")}/></label>
          <label>Brown <input type="checkbox" value="brown"{...register("favColor")}/></label>
          <label>Tan <input type="checkbox" value="tan"{...register("favColor")}/></label>
          <label>Grey <input type="checkbox" value="grey"{...register("favColor")}/></label>
        </div>
        <div className="form-group">
          <label htmlFor="">What do you like about Alpacas?</label>
          <textarea{...register("alpacaEssay", {required: true})}></textarea>
          {errors.alpacaEssay ? (<p className="error">You need add a response.</p>): <></>}
        </div>
      </fieldset>
      
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default App
