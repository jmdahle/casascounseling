import React from 'react';

class ContactForm extends React.Component {
    constructor (props) {
        super (props)

        this.initialState = {
            contact_name: '',
            contact_email: '',
            contact_message: '',
            contact_insurance: '',
        }

        this.state = this.initialState;
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.iniitlaState)
    }
    
    render () {
        const { contact_name, contact_email, contact_message, contact_insurance } = this.state;

        return (
            <div className='contact-form'>
                <h3>Let us contact you</h3>
                <form>
                    <div className='input-field col s6'>
                        <input id='contact_name' name='contact_name' type='text' value={contact_name} className='validate' onChange={this.handleChange} />
                        <label htmlFor='contact_name'>Name</label>
                    </div>
                    <div className='input-field col s10'>
                        <input id='contact_email' name='contact_email' type='email' value={contact_email} className='validate' onChange={this.handleChange}/>
                        <label htmlFor='contact_email'>Email</label>
                    </div>
                    <div className='input-field col s10'>
                        <select id='contact_insurance' name='contact_insurance' value={contact_insurance} onChange={this.handleChange}>
                        <option value='' disabled>Choose your option</option>
                        <option value='bcbs'>Blue Cross/Blue Shield</option>
                        <option value='medicare'>Medicare/Medicaid</option>
                        <option value='other'>Other (out of network)</option>
                        <option value='self'>Self pay</option>
                        </select>
                        <label htmlFor='contact_insurance'>Insurance Information</label>
                    </div>
                    <div className='input-field col s10'>
                        <textarea id='contact_message' name='contact_message' className='materialize-textarea' value={contact_message} onChange={this.handleChange}/>
                        <label htmlFor='contact_message'>Message</label>
                    </div>
                    <div className='col s3'>
                        <a className='btn' href='#!' onClick={this.submitForm}>
                            Submit
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;