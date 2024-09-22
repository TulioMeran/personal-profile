import { Box, SxProps } from '@mui/material';

import { customColors } from '../../../constants/color';
import { useContext } from 'react';
import { DataProviderContext } from '../../../contexts/dataProvider';

const NetworksSection = () => {
  const {theme} = useContext(DataProviderContext)
  const sxStyles = () => {
    const contactmeContainerStyle: SxProps = {
      padding: 7,
      display: 'flex',
      flexDirection: 'column',
    };

    const contactmeLabelStyle: SxProps = {
      fontSize: {xs: '1.2rem' ,md: '1.5rem'}, 
      fontWeight: '600',
      color: theme.primaryFontColor
    };

    const linksContainerStyle: SxProps = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 2,
      columnGap: 1,
      rowGap: 1,
    };

    const contactBoxStyle: SxProps = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: {xs: '1.2rem', md: '1.5rem'},
      flexWrap: 'wrap',
      columnGap: 1,
      rowGap: 1,
    };

    const enlaceStyle: SxProps = {
      textDecoration: 'none',
      color: '#1992CF',
    };

    const contactBoxLabelStyle: SxProps = {
      fontWeight: '700',
    };

    const contactBoxImgStyle: SxProps = {
      height: 50,
      width: 50,
    };

    return {
      contactmeContainerStyle,
      contactmeLabelStyle,
      linksContainerStyle,
      contactBoxStyle,
      enlaceStyle,
      contactBoxLabelStyle,
      contactBoxImgStyle,
    };
  };

  return (
    <Box
      component={'footer'}
      id="networks-section"
      sx={sxStyles().contactmeContainerStyle}>
      <Box component={'label'} sx={sxStyles().contactmeLabelStyle}>
        Networks
      </Box>

      <Box component={'div'} sx={sxStyles().linksContainerStyle}>
        <Box component={'div'} sx={sxStyles().contactBoxStyle}>
        <Box component={'label'} 
                sx={{color: customColors.gray}}  >LinkedIn</Box>
          <Box
            component={'a'}
            href="https://www.linkedin.com/in/rafael-tulio-meran-6992071aa/"
            target={'_blank'}
            sx={sxStyles().enlaceStyle}>
            Rafael Tulio Meran
          </Box>
        </Box>
        <Box component={'div'} sx={sxStyles().contactBoxStyle}>
           <Box component={'label'} 
                sx={{color: customColors.gray}}  >Email</Box>
          <Box
            component={'a'}
            href="mailto:rtulio007@gmail.com"
            target={'_blank'}
            sx={sxStyles().enlaceStyle}>
            rtulio007@gmail.com
          </Box>
        </Box>
        <Box component={'div'} sx={sxStyles().contactBoxStyle}>
          <Box component={'label'} 
                sx={{color: customColors.gray}}  >GitHub</Box>
          <Box
            component={'a'}
            href="https://github.com/TulioMeran"
            target={'_blank'}
            sx={sxStyles().enlaceStyle}>
            TulioMeran
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default NetworksSection;
