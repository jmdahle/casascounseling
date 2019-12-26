import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

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
            <header className='row'>
                <div className='col s12 m12 l12 testborder'>
                    <section id='welcome'>
                        <h1>Welcome</h1>
                    </section>
                </div>
            </header>
            <div className='row'>
                <div className='col s12 m9 l10'>
                    <div className='parallax-container'>
                        <div className='parallax'>
                            <img src='images/spiral-green-plants-1650921.jpg'/>
                        </div>
                    </div>
                    <PageSection name='about' title='About'>
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
                            <img src='images/woman-raising-her-both-hands-1786244.jpg'/>
                        </div>
                    </div>
                    <PageSection name='contact' title='Contact'>
                        <div className='row'>
                            <div className='col s12 m6 l6 testborder'>
                                <h3>Casas Counseling</h3>
                                <ul>
                                    <li>Phone:</li>
                                    <li>Email:</li>
                                    <li>Location:</li>
                                </ul>
                            </div>
                            <div className='col s12 m6 l6 testborder'>
                                <form>
                                    <h3>Contact Us</h3>
                                    <p>Insert form here.</p>
                                </form>
                            </div>
                        </div>
                    </PageSection>
                    <div className='parallax-container'>
                        <div className='parallax'>
                            <img src='images/gen1.jpg'/>
                        </div>
                    </div>
                    <PageSection name='specialties' title='Specialties'>
                        <div className='row'>
                            <div className='col s12 m6 l6 testborder'>
                                <h3>Grief and Loss</h3>
                            </div>
                            <div className='col s12 m6 l6 testborder'>
                                <h3>Perinatal mood disorders</h3>
                            </div>
                            <div className='col s12 m6 l6 testborder'>
                                <h3>Parenting issues</h3>
                            </div>
                            <div className='col s12 m6 l6 testborder'>
                                <h3>Generalized anxiety or depression</h3>
                            </div>
                        </div>
                    </PageSection>
                    <PageSection name='test' title='Test Title'>
                        <p>Yeah, this is good text</p><p>And more...</p>
                    </PageSection>

                </div>
                <div id='nav-container' className='col hide-on-small-only m3 l2'>
                    < Nav menuitems={sections} />
                </div>
            </div>
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
