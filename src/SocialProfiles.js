import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render() {
        console.log('social profiles props', this.props);
        const { link, image } = this.props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width:35, height:35, margin:10}}/></a>
            </span>
        );
    }
}

class SocialProfiles extends Component{
    render() {
        return (
            <div>
                <h2>Connect With Me!</h2>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    })
                }
            </div>
        );
    }
}

export default SocialProfiles;