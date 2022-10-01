import { Box } from "@mui/material"

const PresentationSection = () => {

    return (
     <Box component={'div'} 
          id="presentation-section"
          sx={{padding: 5,
               fontSize: 25, 
               fontStyle: 'italic',
               backgroundColor:'#F7F7F7',
               scrollBehavior: 'smooth'}}>
        <p>Hi, i'm a <strong>software developer</strong> with many years of experience, i have worked most of the time as a <strong>frontend</strong> developer with javascript's frameworks such as Angular and Vuejs and libraries as <strong>React.js</strong>, Redux and Jquery, also i have experience working with <strong>backend</strong> tecnologies such as ASP.NET MVC, ASP.NET CORE and PHP (Slim framework and Symfony).</p>

        <p>I also have knowledge in mobile framework such as <strong>React native</strong>, xamarin forms and flutter, and backends such as NodeJS with Express.js and Django.</p>

        <p>My main mission is always to <strong>keep learning</strong> new things about programming tecnologies and frameworks, i hope my profile could be interesting and let's code.</p>
     </Box>)
}

export default PresentationSection