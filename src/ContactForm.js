import React from 'react';

class ContactForm extends React.Component {
    constructor (props) {
        super (props)

        this.initialState = {
            name: '',
            email: '',
            message: '',
            //insurance: '',
        }

        this.state = this.initialState;
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    render () {
        const { name, email, message, /*insurance*/ } = this.state;

        return (
            <div className='contact-form'>
                <h3>Let us contact you</h3>
                <form>
                    <div className='input-field col s6'>
                        <input id='name' name='name' type='text' value={name} className='validate' onChange={this.handleChange} />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className='input-field col s10'>
                        <input id='email' name='email' type='email' value={email} className='validate' onChange={this.handleChange}/>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='input-field col s10'>
                        <textarea id='message' name='message' className='materialize-textarea' value={message} onChange={this.handleChange}/>
                        <label htmlFor='message'>Message</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;