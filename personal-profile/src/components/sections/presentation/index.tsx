import { Box } from "@mui/material"

const PresentationSection = () => {

    return (
     <Box component={'div'} 
          id="presentation-section"
          sx={{padding: 5,
               fontSize: 25, 
               fontStyle: 'italic',
               backgroundColor:'#F7F7F7'}}>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'column'}} >
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flexWrap: 'wrap'}} >
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', marginBottom: 2, columnGap: 2, rowGap: 2}} >
               <label><strong>Full name:</strong></label>
               <label>Rafael Tulio Meran</label>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', marginBottom: 2, columnGap: 2, rowGap: 2}} >
               <label><strong>Major:</strong></label>
               <label>Software Engineer</label>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', marginBottom: 2, columnGap: 2, rowGap: 2}} >
               <label><strong>Hometown country:</strong></label>
               <label>Dominican Republic</label>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', marginBottom: 2, columnGap: 2, rowGap: 2}} >
               <label><strong>BirthDay:</strong></label>
               <label>July, 4th</label>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', marginBottom: 2, columnGap: 2, rowGap: 2}} >
               <label><strong>Work years experience:</strong></label>
               <label>5+</label>
          </Box>
          </Box>
          <Box component={'div'}>
               <label> <strong>Summary:</strong> </label>
               <p>Hi, i'm a <strong>software developer</strong> with many years of experience. I have worked most of the time as a <strong>frontend</strong> developer with javascript's frameworks such as <strong>Angular</strong> and <strong>Vuejs</strong>  and libraries as <strong>React.js</strong>, Redux and Jquery, also i have experience working with <strong>backend</strong> tecnologies such as ASP.NET MVC, <strong>ASP.NET CORE</strong>  and PHP (Slim framework and Symfony).</p>

               <p>I also have knowledge in mobile framework such as <strong>React native</strong>, xamarin forms and flutter, and backends such as NodeJS with <strong>Express.js</strong>  and Django.</p>

               <p>My main mission is always to <strong>keep learning</strong> new things about programming tecnologies and frameworks, i hope my profile could be interesting and <strong>let's code.</strong> </p>
          </Box>
        </Box>
     </Box>)
}

export default PresentationSection