import { useForm } from "react-hook-form";
import clsx from "clsx";
import "./NewPennyForm.css";

export function NewPennyForm(props) {
    const {addPennyFn} = props;
    //enabling the ability to render new elements and be able to submit form 
    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    function handleSubmitJob(data) { //reset info on form
        addPennyFn(data);
        reset();
    }

    return(
        <div className="form-wrapper">
        <h4>Add Your Own Pressed Penny!</h4>
          <form onSubmit={handleSubmit(handleSubmitJob)}>
                <div className={clsx (["form-group required", errors.pennyName && "error"])}>
                <label htmlFor="penny-name">Penny Name</label>
                <input type="text" id="pennyName" {...register("penny", {required:true})}/>
                {errors.penny && (<p id="pennyName" class="error" role="alert">Penny Name is required.</p>)}
                </div>
            <div className="form-group">
              <label>Year Acquired</label>
              <input id="pennyYear" {...register("year")}/>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input id="pennyLocation" {...register("location")}/>
            </div>
            <div className={clsx (["form-group required", errors.pennyImage && "error"])}>
              <label htmlFor="pennyImage">Image</label>
              <input type="text" id="pennyImage "{...register("image", {required: true})} />
              {errors.image && (<p id="pennyImage" class="error" role="alert">Please upload an image.</p>)}
            </div>
            <div className="form-group">
                <div className="penny-fav">
                    <label htmlFor="pennyFavPenny">Add to Favorites</label>
                </div>
                <input id="pennyFavPenny"type="checkbox" {...register("favPenny")}/>
            </div>
            <div className="form-button">
                <button type="submit">ADD PENNY</button>
            </div>
          </form>
        </div>
    )
}