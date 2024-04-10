const FormInput=({label,...otherProps})=>{
    return (
        <div className="group">
            <input className="form-input" {...otherProps} required/>
         {
            label&&(
            <label htmlFor="" className={`${otherProps.value.length? 'shrink':null} form-input-label`}>{label}</label>

            )
         }
        </div>
    )
}

export default FormInput