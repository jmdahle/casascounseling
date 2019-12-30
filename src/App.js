import React from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
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
                <header>
                    <div id='banner-container'>
                        <i className='tiny material-icons'>phone</i>&nbsp;888-888-8888&nbsp;|&nbsp;
                        <i className='tiny material-icons'>mail</i>&nbsp;paula@casascounseling.com&nbsp;|&nbsp;
                        <a href='#!'>client login</a>&nbsp;
                    </div>
                </header>
                <main>
                    <div id='spacer' className='row'>
                        <p>&nbsp;</p>
                    </div>
                    <div className='row'>
                        <div className='col s12 m9 l10'>
                            <div className='parallax-container'>
                                <div className='parallax-interior'>
                                    <p>
                                        Say something really profound. And then contact us button.
                                    </p>
                                    <a href='#!' className='btn'>Contact</a>
                                </div>
                                <div className='parallax'>
                                    <img className='parallaximage' src='images/spiral-green-plants-1650921.jpg' alt=''/>
                                </div>
                            </div>
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
                            <div className='parallax-container'>
                                <div className='parallax'>
                                    <img className='parallaximage' src='images/woman-raising-her-both-hands-1786244.jpg' alt=''/>
                                </div>
                            </div>
                            <PageSection name='contact' title=''>
                                <div className='row flex'>
                                    <div id='contact-left' className='col s12 m5 l5 contact-container'>
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
                                        <ContactForm />
                                    </div>
                                </div>
                            </PageSection>
                            <div className='parallax-container'>
                                <div className='parallax'>
                                    <img className='parallaximage' src='images/gen1.jpg' alt=''/>
                                </div>
                            </div>
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
                                <p>spacer</p>
                                <div id='sticky' className='pushpin'>
                                    <img className='' src='images/casas_counseling_logo.png' alt=''/>
                                    < Nav menuitems={sections} />
                                </div>
                            </div>
                        </div>
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

const SpecialtyCard = (props) => {
    return (
            <div className='col s12 m6 l6'>
            <div id={props.name} className='specialty-card'>
                <h2>
                    {props.title}
                </h2>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default App;
