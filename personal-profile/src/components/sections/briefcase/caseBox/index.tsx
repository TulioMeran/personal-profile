import { Box, SxProps } from '@mui/material';
import Carousel from 'better-react-carousel';
import { FC, useContext } from 'react';
import { BriefCase } from '../../../../types/data/briefcase';
import { customColors } from '../../../../constants/color';
import { DataProviderContext } from '../../../../contexts/dataProvider';

const CaseBox: FC<{ case: BriefCase }> = (props) => {
  const {theme} = useContext(DataProviderContext)
  const sxStyles = () => {
    const nameStyle: SxProps = {
      textDecoration: 'none',
      color: '#1992CF',
    };

    const techContainerStyle: SxProps = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    };

    const chipStyle: SxProps = {
      fontSize: 20,
      fontWeight: '500',
      marginTop: 1,
    };

    const imageStyle: SxProps = {
      height: 450,
      width: '100%',
      objectFit: 'contain',
    };

    const titleStyle: SxProps = {
      fontWeight: 'bold', 
      color: theme.primaryFontColor
    };

    return {
      nameStyle,
      techContainerStyle,
      chipStyle,
      imageStyle,
      titleStyle
    };
  };

  return (
    <Box component={'div'} sx={{ marginTop: 3 }}>
      <Box component={'div'}>
        <Box
          component={'a'}
          href={props.case.url}
          target="_blank"
          sx={sxStyles().nameStyle}>
          {props.case.name}
        </Box>
      </Box>
      <Box component={'div'} sx={{ marginTop: 2 }}>
        <Box component={'label'} sx={sxStyles().titleStyle} >Summary</Box>
        <Box component={'p'} sx={{color: customColors.secondary}}  >{props.case.description}</Box>
      </Box>
      <Box component={'div'}>
       <Box component={'label'} sx={sxStyles().titleStyle} >Role</Box>
        <Box component={'p'} sx={{color: customColors.gray}} >{props.case.role}</Box>
      </Box>
      {props.case.images.length > 0 && (
        <Box component={'div'} sx={{ marginTop: 3 }}>
          <Box component={'div'} sx={{ marginTop: 2 }}>
            <Carousel cols={2} loop>
              {props.case.images.map((item, index) => (
                <Carousel.Item key={index}>
                  <Box
                    component={'img'}
                    src={`${process.env.PUBLIC_URL}/${item}`}
                    sx={sxStyles().imageStyle}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Box>
        </Box>
      )}

      <hr />
    </Box>
  );
};

export default CaseBox;
