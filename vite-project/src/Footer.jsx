import facebookLogo from './assets/Facebook Icon.png'
import twitterLogo from './assets/Twitter Icon.png'
import instagramLogo from './assets/Instagram Icon.png'
import linkedInLogo from './assets/LinkedIn Icon.png'
import gitHublogo from './assets/GitHub Icon.png'

export default function Footer() {
    return (
        <footer>
            <img src={twitterLogo} alt="Twitter logo" />
            <img src={facebookLogo} alt="Facebook logo" />
            <img src={instagramLogo} alt="Instagram logo" />
            <img src={linkedInLogo} alt="LinkedIn logo" />
            <img src={gitHublogo} alt="GitHub logo" />
        </footer>
    )
        
}
