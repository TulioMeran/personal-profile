import { Box, Chip, SxProps } from '@mui/material';
import Carousel from 'better-react-carousel';
import { FC } from 'react';
import { BriefCase } from '../../../../types/data/briefcase';

const CaseBox: FC<{ case: BriefCase }> = (props) => {
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

    return {
      nameStyle,
      techContainerStyle,
      chipStyle,
      imageStyle,
    };
  };

  return (
    <Box component={'div'} sx={{ marginTop: 3 }}>
      <Box component={'div'}>
        <label>
          <strong>Name: </strong>
        </label>
        <Box
          component={'a'}
          href={props.case.url}
          target="_blank"
          sx={sxStyles().nameStyle}>
          {props.case.name}
        </Box>
      </Box>
      <Box component={'div'} sx={{ marginTop: 2 }}>
        <label>
          {' '}
          <strong>Description:</strong>{' '}
        </label>
        <p>{props.case.description}</p>
      </Box>
      <Box component={'div'}>
        <label>
          <strong>Role: </strong>
        </label>
        <label>{props.case.role}</label>
      </Box>
      <Box component={'div'} sx={{ marginTop: 3 }}>
        <label>
          <strong>Techs:</strong>
        </label>
        <Box component={'div'} sx={sxStyles().techContainerStyle}>
          {props.case.tech.map((item, index) => (
            <Box key={index} component={'div'}>
              <Chip label={item} sx={sxStyles().chipStyle} />
            </Box>
          ))}
        </Box>
      </Box>
      {props.case.images.length > 0 && (
        <Box component={'div'} sx={{ marginTop: 3 }}>
          <label>
            <strong>Medias:</strong>
          </label>
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
