import LocationIcon from '../components/Icons/LocationIcon'
import PhoneIcon from '../components/Icons/PhoneIcon'
import CalendarIcon from '../components/Icons/CalendarIcon'
import EmailIcon from '../components/Icons/EmailIcon'

const educations = [
    {
        id: '1',
        title: 'Software Engineer', degree: 'Master',
        year: 'Sep 2018 - Sep 2022',
        location: 'Tehran Iran',
        university: 'K. N. Toosi University of Technology',
        universityLink: 'https://en.kntu.ac.ir/',
        rank: '#631 in Best Universities',
        rankingLink: 'https://www.usnews.com/education/best-global-universities/computer-science?city=tehran&name=Toosi'
    },
    {
        id: '2',
        title: 'Computer Engineer', degree: 'Bachelor',
        year: 'Sep 2013 - Sep 2018',
        location: 'Mashhad Iran',
        university: 'Ferdowsi University of Mashhad',
        universityLink: 'https://en.um.ac.ir/',
        rank: '#703 in Best Universities',
        rankingLink: 'https://www.usnews.com/education/best-global-universities/computer-science?city=mashhad'
    },

];
const experiences = [
    {
        id: '1',
        title: 'Front-End Developer',
        year: 'Jan 2023 – Jan 2024',
        company: 'Sarbedaran Kavvosh',
        location: 'Sabzevar Iran',
        desc: 'A sub branch of Asia Tech',
        companyLink: 'https://asiatech.com/en/',

    },
    {
        id: '2',
        title: 'Application Developer',
        year: 'Oct 2018  – Dec 2022',
        location: 'Tehran Iran',
        company: 'Artificial Intelligence Part ',
        desc: 'R&D Company',
        companyLink: 'https://www.linkedin.com/company/part-dp/',
    },
    {
        id: '3',
        title: 'Teaching Assistant',
        year: 'Jan 2016 - May 2017',
        location: 'Mashhad Iran',
        company: 'Ferdowsi University of Mashhad',
        desc: 'Microprocessor and Computer Architecture and Logic Circuit courses',
        companyLink: 'https://en.um.ac.ir/',
    },

];
const awards = [
    {
        id: '1',
        title: '16th Rank - National PhD Exam',
        year: '2022',
        location: 'Iran',
        desc: 'Ranked 16th in the National PhD Entrance Exam for Software Engineering out of 1500 participants',
    },
    {
        id: '2',
        title: 'Top 3 Computer Engineering Graduate',
        year: '2018',
        location: 'Mashhad Iran',
        desc: 'The top third graduate of Ferdowsi University of Mashhad in the field of computer engineering',

    },
    {
        id: '3',
        title: '1st Place - South Khorasan Robotics',
        year: '2014',
        location: 'South Khorasan Iran',
        desc: 'The first place winner in the robotics competition of following the line in South Khorasan province of Iran',
    },


];
const skills = [
    { id: '1', title: 'Java', percent: 90, },
    { id: '2', title: 'Java Script', percent: 80, },
    { id: '3', title: 'Python', percent: 20, },
    { id: '4', title: 'React', percent: 60, },


];
const knowledges = [
    { id: '1', title: 'Android Developer' },


];
export { educations, experiences, awards, skills, knowledges };