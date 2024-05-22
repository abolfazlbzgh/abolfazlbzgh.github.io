import HomeIcon from '../components/Icons/HomeIcon'
import AboutIcon from '../components/Icons/AboutIcon'
import WorkIcon from '../components/Icons/WorkIcon'
import CodeIcon from '../components/Icons/CodeIcon'
import ResumeIcon from '../components/Icons/ResumeIcon'
import ContactIcon from '../components/Icons/ContactIcon'

const menu = [
    { id:'1',title: 'Home', linkTo: '/', icon: <HomeIcon /> },
    { id:'2',title: 'About', linkTo: '/about', icon: <AboutIcon /> },
    { id:'3',title: 'Resume', linkTo: '/resume', icon: <ResumeIcon /> },
    { id:'4',title: 'Code', linkTo: '/code', icon: <CodeIcon /> },
    { id:'5',title: 'Contact', linkTo: '/contact', icon: <ContactIcon /> },

];
export default menu;