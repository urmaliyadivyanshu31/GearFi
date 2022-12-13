import React from 'react'

function Form() {

    /* JS only used to prevent form being submitted while fields are invalid */

/* Much simpler form validation */
const inputs = document.querySelectorAll(".form-input");
const checkbox = document.getElementById("checkbox1");

/* Check validity on startup */
for (let input of inputs) {
	if (!input.checkValidity()) {
		checkbox.disabled = true;
	}
	input.addEventListener("change", (e) => {
		if (e.currentTarget.checkValidity()) {
			checkbox.disabled = false;
		}
	});
}


  return (
    <div className='form-container'>
	<div className='form-card'>
		<h2 className='form-text'>List Your NFT</h2>
		<form className='simple-form'>
			<input className='form-input' required type='text' id='contract-address' placeholder='Contract Address'></input>

			<input required className='form-input optional' type='text' id='tokenId' placeholder='Token ID' optional></input>
			<input required className='form-input' type='text' id='asking-price' placeholder='Asking Price'></input>
		<input required className='form-input' type='text' id='repayment' placeholder='Repayment Duration'></input>
		</form>
		<div className='bottom'>
			<label id='submit-button' className='label-button' for='checkbox1'>
				<input type='checkbox' id='checkbox1'>
				</input>
			</label>
		</div>
	</div>
</div>
  )
}

export default Form