import React from 'react';

// import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import ContactForm from './ContactForm';

class App extends React.Component {
    state = {
        contactInfo: {},
        showPopUp: false,
    }

    openPopUp = () => {
        this.setState( {showPopUp: true} );
    }

    closePopUp = () => {
        this.setState( {showPopUp: false} );
    }

    openNewTab = (link) => {
        this.closePopUp();
        window.open(link, '_blank')
    }

    handleSubmit = contactFormData => {
        this.setState( {contactInfo: contactFormData} );
        
        let postdata =  new FormData();
        for ( let item in contactFormData ) {
            postdata.append(item, contactFormData[item]);
        }
        
        postdata.append('service_id', 'smtp_server');
        postdata.append('template_id', 'contact_form');
        postdata.append('user_id', 'user_KNUNPVrJESIKhlpR0Npy4');

        fetch('https://api.emailjs.com/api/v1.0/email/send-form',{
            method: 'POST',
            body: postdata,
            contentType: 'multipart/form-data',
            processData: false // no need to parse formData to string
            })
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
        });
    }


    render () {
        const sections = [
            {
                href: '#about',
                title: 'About'
            },
            {
                href: '#contact',
                title: 'Contact'
            },
            {
                href: '#specialties',
                title: 'Specialties'
            }
            ]
        return (
            <div className='pagecontainer'>
                <header>
                    <div id='banner-container'>
                        <i className='tiny material-icons'>phone</i>&nbsp;888-888-8888&nbsp;|&nbsp;
                        <i className='tiny material-icons'>mail</i>&nbsp;paula@casascounseling.com&nbsp;|&nbsp;
                        <a href='#!' onClick={this.openPopUp}>client login</a>&nbsp;
                    </div>
                </header>
                    <PopUp 
                        showPopUp={this.state.showPopUp} 
                        closePopUp={this.closePopUp} 
                        openNewTab={this.openNewTab}
                        externalLink='#!'/>
                <main>
                    <div className='row'>
                        <div id='main-container' className='col s12 m9 l10'>
                            <ParallaxSection name='welcome' imgref='spiral-green-plants-1650921.jpg'>
                                <p>
                                    Say something really profound. And then contact us button.
                                </p>
                                <a href='#contact' className='btn'>Contact</a>
                            </ParallaxSection>
                            <PageSection name='about' title=''>
                                <div className='row flex'>
                                    <div id='about-left' className='col s12 m12 l7'>
                                        <p>
                                            All of life is a precious whole: Loss and suffering are as much a part of the human experience as are joy and connection. I believe that our moments of greatest vulnerability and despair can be powerful opportunities for change, allowing us to heal past wounds and accept ourselves and what life brings us. As a therapist I seek to accompany you on life's journey with respect and empathic listening, honoring and understanding your life stories and the meaning those experiences hold for you. My practice focuses on helping people lead more authentic, fulfilling lives, no matter the age.
                                        </p>
                                        <p>
                                            I specialize in helping people cope with loss. Whether you're grieving a loved one or lost relationship, struggling with a miscarriage or postpartum blues, or mourning a decline in your own health, I can help you move through the experience. I support people through life transitions and parenting challenges.
                                        </p>
                                        <p>
                                            I often use guided meditation and mindfulness-based activities to help clients connect more fully with their emotions and body. I am fluent in Spanish and am familiar with many cultural backgrounds. I practice at the Willow Wellness Center, which specializes in deep healing and graceful living for adults.
                                        </p>
                                    </div>
                                    <div id='about-right' className='col s12 m12 l5 valign-wrapper'>
                                        <img src='images/pcasas-hs1.jpg' alt=''/>
                                        <p>Paula Casas, LCSW</p>
                                    </div>
                                </div>
                            </PageSection>
                            <ParallaxSection name='break-1' imgref='woman-raising-her-both-hands-1786244.jpg'/>
                            <PageSection name='contact' title=''>
                                <div className='row flex'>
                                    <div id='contact-left' className='col s12 m5 l5'>
                                        <div className='contact-direct'>
                                            <h3>Contact directly by phone or email</h3>
                                            <ul>
                                                <li>
                                                    <i className='material-icons'>phone</i>
                                                    &nbsp;888-888-8888
                                                </li>
                                                <li>
                                                    <i className='material-icons'>mail</i>
                                                    &nbsp;paula@casascounseling.com
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id='contact-right' className='col s12 m7 l7'>
                                        <ContactForm handleSubmit={this.handleSubmit} />
                                    </div>
                                </div>
                            </PageSection>
                            <ParallaxSection name='break2' imgref='gen1.jpg' />
                            <PageSection name='specialties' title='Specialties'>
                                <div className='row'>
                                    <SpecialtyCard name='grief_and_loss' title='Grief and Loss'>
                                        content
                                    </SpecialtyCard>
                                    <SpecialtyCard name='perinatal_mood_disorders' title='Perinatal Mood Disorders'>
                                        content
                                    </SpecialtyCard>
                                    <SpecialtyCard name='parenting_issues' title='Parenting Issues'>
                                        content
                                    </SpecialtyCard>
                                    <SpecialtyCard name='anxiety_or_depression' title='Generalized Anxiety or Depression'>
                                        content
                                    </SpecialtyCard>
                                </div>
                            </PageSection>
                        </div>
                        <div id='sidebar-container' className='col hide-on-small-only l2'>
                            <div id='sticky-container'>
                                <div id='sticky' className='pushpin'>
                                    <img className='' src='images/casas_counseling_logo.png' alt=''/>
                                    < Nav menuitems={sections} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className='footer-wrapper'>
                    <div className="row">
                        <div className="col l6 s12">
                                <h5 className="grey-text">Footer Content</h5>
                                <p className="grey-text text-darken-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                                <h5 className="grey-text">Links</h5>
                                <ul>
                                <li><a className="grey-text text-darken-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-darken-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-darken-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-darken-3" href="#!">Link 4</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        &copy; 2020 Paula Casas, LCSW PC
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </footer>
            </div>
        );
    }
}

const Nav = (props) => {
    const listitems = props.menuitems.map( (item, index) => {
        return (
            <li key={index} >
                <a href={item.href}>{item.title}</a>
            </li>
        )
    })
  return (
    <div id='toc-wrapper'>
      <ul className='section table-of-contents'>
          {listitems}
      </ul>      
    </div>
  );
}

const PageSection = (props) => {
    return (
        <div id={props.name} className='scrollspy section'>
            <h2>
                {props.title}
            </h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

const ParallaxSection = (props) => {
    const imageReference = 'images/' + props.imgref
    return (
        <div id={props.name} className='parallax-container'>
            <div className='parallax-interior'>
                    {props.children}
            </div>
            <div className='parallax'>
                <img className='parallaximage' src={imageReference} alt=''/>
            </div>
        </div>
    )
}

const SpecialtyCard = (props) => {
    return (
        <div className='col s12 m6 l3'>
            <div id={props.name} className='specialty-card'>
                <h3>
                    {props.title}
                </h3>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const PopUp = (props) => {
    if (props.showPopUp === false) {
        return (
            <span></span>
        )
    }
    else {
        return (
            <div className='popup'>
                <div className='row'>
                    <div className='col s12 m12 l12'>
                        <h3>Notice</h3>
                        <div>
                            <p>
                                You are about to leave casascounseling.com to use our secure patient portal.  You can use the patient portal to view or schedule appointments, review billing information in a secure, HIPAA-compliant manner. For your convenience, the poral will open in a new window.
                            </p>
                            <p>
                                Click 'continue' to access the portal.  Or click 'Close' to close this message box.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s6'>
                        <a className='btn' onClick={() => props.closePopUp()}>Close</a>
                    </div>
                    <div className='col s6'>
                        <a className='btn' onClick={ () => props.openNewTab(props.externalLink)}>Continue</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
