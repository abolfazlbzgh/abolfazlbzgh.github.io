const codes = [
  {
    id: '1',
    title: 'Company Project: Mobile Application Sahab',
    creatorName: 'Abolfazl Bazghandi',
    creatorImage: '/Images/profile.png',
    createTime: "23 May 2024",
    cover: '/Images/post-1-cover.png',
    tags: ["Company Project", "Sahab", "Part AI", "Mobile Application", "Java"],
    btnLink: 'https://www.linkedin.com/company/part-dp/',
    btn: 'Artificial Intelligence Center Part company',
    article: [
      { type: 'br' },
      { type: 'p', content: "Sahab was a program for Artificial Intelligence Center Part company that started in 2019 and ended in 2022. I worked as an Android developer on this application. This program was an internal tool for presentation to the company's customers and it was in Farsi. The program, written in Java and Kotlin, showcased various artificial intelligence services across four main sub-categories:" },
      { type: 'ul', items: ['Speech processing', 'Machine vision' , 'Natural language processing' , 'Data mining'] },
      { type: 'img',content:"There are some screen from APP There are some screen from APP There are some screen from APP" , src: '/Images/post-1-cover.png' },
      { type: 'br' },
      { type: 'a', content:"Click Me top open the link" , link:"https://www.linkedin.com/company/part-dp/" },
      { type: 'html', content: `<h1 style="background-color: aqua;"> this is </h1><p>this is the text <b>Bold</b> and another <u>under line</u></p>` },
      { type: 'h1', content: 'H1 tag <h1 style="background-color: aqua;"> this is </h1><p>this is the text <b>Bold</b> and another <u>under line</u></p> <h1 style="background-color: aqua;"> this is </h1><p>this is the text <b>Bold</b> and another <u>under line</u></p>' },
      { type: 'h2', content: 'H2 tag' },
      { type: 'h3', content: 'H3 tag' },
      { type: 'h4', content: 'H4 tag' },
      { type: 'p', content: "this is a desc about another this project" },
      { type: 'img', src: '/Images/cover1.jpg' },
      { type: 'ul', items: ['firstItem', 'second Item'] },
      { type: 'ol', items: ['item 1', 'item 2'] },
      {
        type: 'code',
        lang: "python",
        code: `
                public class HelloWorld {
                    public static void main(String[] args) {
                        System.out.println("Hello, World!");
                    }
                }
              `
      }
    ]


  },
  {
    id: '2',
    title: 'A Comprehensive Introduction to Tailwind CSS',
    creatorName: 'Abolfazl Bazghandi',
    creatorImage: '/Images/profile.png',
    createTime: "Sep 9, 2023",
    tags: ["Tailwind", "CSS"],
    cover: '/Images/coverTailwind.webp',
    btnLink: 'https://medium.com/@alifm2101/a-comprehensive-introduction-to-tailwind-css-36bc9cb81a1c',
    btn: 'Page Source',
    article: [
      { type: 'br' },
      { type: 'p', content: "Hello, dear friends. Welcome back to this article with me, Muhammad Alif Budiman. In this article, we are embarking on a new series about Tailwind CSS. In this series, we will delve into a highly popular CSS framework. In this article, we will begin with an explanation of what Tailwind CSS is. We will discuss its definition, concepts, and also explore how it differs from other commonly used frameworks like Bootstrap." },
      { type: 'br' },
      { type: 'h2', content: "What is Tailwind CSS?" },
      { type: 'p', content: "Tailwind CSS is described as ‘A Utility-first CSS Framework that packed with classes.’ This means that Tailwind is a CSS framework that prioritizes the use of utility classes. This framework provides numerous classes that we can use. Before delving deeper into Tailwind CSS, it’s essential to understand what utility-first means. Tailwind falls into this category of CSS frameworks." },
      { type: 'br' },
      { type: 'p', content: "If we were to create an alert component like this using regular CSS, the code might look something like this:" },
      { type: 'br' },
      {
        type: 'code',
        lang: "html",
        code: 
`
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notificaiton-logo" src="img/logo.svg" />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>
`
      },
      
      { type: 'ul', items: [
        'JSX Syntax: A fusion of JavaScript and HTML, JSX streamlines component creation, enhancing developer productivity.',
       'Component Architecture: React adopts a component-centric approach, fostering code reusability and modularity.',
       'Virtual DOM: Leveraging a virtual representation of the DOM, React optimizes rendering for improved performance.',
       'One-Way Data Binding: React’s data flow architecture ensures predictable updates, simplifying state management.',
      
      ] },

      { type: 'br' },
      { type: 'h2', content: "Exploring the Advantages of React:" },
      { type: 'ul', items: [
        'Ease of Learning: Abundant learning resources and a supportive community make React accessible to beginners.',
        'Performance Optimization: The virtual DOM and efficient rendering mechanisms contribute to fast and responsive React applications.',
        'SEO Friendliness: React supports server-side rendering, enhancing search engine visibility and performance.',
        'Reusable Components: React’s component-based architecture promotes code modularity and maintenance.',
      ] },

      { type: 'br' },
      { type: 'h2', content: "In Conclusion:" },
      { type: 'p', content: "React and Next.js stand as pillars in the JavaScript ecosystem, each offering unparalleled capabilities for web application development. Whether you opt for React’s flexibility or Next.js’s simplicity, you possess the tools to create exceptional web experiences tailored to your project’s needs. Let this exploration serve as a compass, guiding you towards the framework best suited for your next venture in the digital realm." },

      { type: 'br' },
    ]



  },
  {
    id: '4',
    title: 'Unveiling the Power of Next.js vs React: Choosing the Ideal Framework',
    creatorName: 'Mahsa',
    creatorImage: '/Images/profile.png',
    createTime: "Feb 6, 2024",
    cover: '/Images/coverReact.webp',
    tags: ["React", "Node js" , "Article"],
    btnLink: 'https://medium.com/@future_fanatic/unveiling-the-power-of-next-js-vs-react-choosing-the-ideal-framework-3162adc26460#:~:text=Choosing%20Between%20Next.&text=React%20shines%20in%20scenarios%20requiring,needs%20before%20making%20a%20choice.',
    btn: 'Page Source',
    article: [
      { type: 'br' },
      { type: 'p', content: "In the ever-evolving landscape of JavaScript development, React and Next.js emerge as frontrunners, each offering distinct advantages for web application development. Let’s embark on a journey to unravel the differences between Next.js and React, empowering you to make informed decisions for your next project." },
      { type: 'br' },
      { type: 'h2', content: "Understanding React:" },
      { type: 'p', content: "At its core, React is a revolutionary UI library crafted by Meta to facilitate the creation of reactive web applications. It introduces a paradigm shift with its component-based architecture and virtual DOM, enabling developers to build reusable and efficient components." },
      { type: 'br' },
      { type: 'h2', content: "Delving into React’s Key Features:" },
      { type: 'ul', items: [
        'JSX Syntax: A fusion of JavaScript and HTML, JSX streamlines component creation, enhancing developer productivity.',
       'Component Architecture: React adopts a component-centric approach, fostering code reusability and modularity.',
       'Virtual DOM: Leveraging a virtual representation of the DOM, React optimizes rendering for improved performance.',
       'One-Way Data Binding: React’s data flow architecture ensures predictable updates, simplifying state management.',
      
      ] },

      { type: 'br' },
      { type: 'h2', content: "Exploring the Advantages of React:" },
      { type: 'ul', items: [
        'Ease of Learning: Abundant learning resources and a supportive community make React accessible to beginners.',
        'Performance Optimization: The virtual DOM and efficient rendering mechanisms contribute to fast and responsive React applications.',
        'SEO Friendliness: React supports server-side rendering, enhancing search engine visibility and performance.',
        'Reusable Components: React’s component-based architecture promotes code modularity and maintenance.',
      ] },

      { type: 'br' },
      { type: 'h2', content: "In Conclusion:" },
      { type: 'p', content: "React and Next.js stand as pillars in the JavaScript ecosystem, each offering unparalleled capabilities for web application development. Whether you opt for React’s flexibility or Next.js’s simplicity, you possess the tools to create exceptional web experiences tailored to your project’s needs. Let this exploration serve as a compass, guiding you towards the framework best suited for your next venture in the digital realm." },

      { type: 'br' },
    ]


  },




];
export default codes.reverse();