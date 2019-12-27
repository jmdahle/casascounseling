import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';

class App extends React.Component {
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
                <header className='header-wrapper'>
                    <i className='material-icons'>phone</i>&nbsp;888-888-8888
                    &nbsp;|&nbsp;
                    <i className='material-icons'>mail</i>&nbsp;paula@casascounseling.com
                </header>
                <main className='row'>
                    <div className='col s12 m9 l10'>
                        <div className='parallax-container'>
                            <div className='parallax-interior'>
                                <p>
                                    Say something really profound. And then contact us button.
                                </p>
                                <a className='btn'>Contact</a>
                            </div>
                            <div className='parallax'>
                                <img className='parallaximage' src='images/spiral-green-plants-1650921.jpg'/>
                            </div>
                        </div>
                        <PageSection name='about' title=''>
                            <p>
                                All of life is a precious whole: Loss and suffering are as much a part of the human experience as are joy and connection. I believe that our moments of greatest vulnerability and despair can be powerful opportunities for change, allowing us to heal past wounds and accept ourselves and what life brings us. As a therapist I seek to accompany you on life's journey with respect and empathic listening, honoring and understanding your life stories and the meaning those experiences hold for you. My practice focuses on helping people lead more authentic, fulfilling lives, no matter the age.
                            </p>
                            <p>
                                I specialize in helping people cope with loss. Whether you're grieving a loved one or lost relationship, struggling with a miscarriage or postpartum blues, or mourning a decline in your own health, I can help you move through the experience. I support people through life transitions and parenting challenges.
                            </p>
                            <p>
                                I often use guided meditation and mindfulness-based activities to help clients connect more fully with their emotions and body. I am fluent in Spanish and am familiar with many cultural backgrounds. I practice at the Willow Wellness Center, which specializes in deep healing and graceful living for adults.
                            </p>
                        </PageSection>
                        <div className='parallax-container'>
                            <div className='parallax'>
                                <img className='parallaximage' src='images/woman-raising-her-both-hands-1786244.jpg'/>
                            </div>
                        </div>
                        <PageSection name='contact' title='Contact'>
                            <div className='row'>
                                <div className='col s12 m7 l7 contact-container'>
                                    <img src='images/pcasas-hs1.jpg' className='contact-image'/>
                                    <div className='contact-text'>
                                        <p>I support people through life transitions and challenges.</p>
                                    </div>
                                    <div className='contact-info'>
                                            Paula Casas, LCSW
                                    </div>
                                </div>
                                <div className='col s12 m5 l5 bg-alt'>
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
                                    </div>                                    <ContactForm />
                                </div>
                            </div>
                        </PageSection>
                        <div className='parallax-container'>
                            <div className='parallax'>
                                <img className='parallaximage' src='images/gen1.jpg'/>
                            </div>
                        </div>
                        <PageSection name='specialties' title='Specialties'>
                            <div className='row'>
                                <div className='col s12 m6 l6'>
                                    <h3>Grief and Loss</h3>
                                </div>
                                <div className='col s12 m6 l6'>
                                    <h3>Perinatal mood disorders</h3>
                                </div>
                                <div className='col s12 m6 l6'>
                                    <h3>Parenting issues</h3>
                                </div>
                                <div className='col s12 m6 l6'>
                                    <h3>Generalized anxiety or depression</h3>
                                </div>
                            </div>
                        </PageSection>
                    </div>
                    <div id='nav-container' className='col hide-on-small-only m3 l2'>
                        < Nav menuitems={sections} />
                    </div>
                </main>
                <footer className='footer-wrapper'>

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
      <ul className="section table-of-contents">
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

export default App;
