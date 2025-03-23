import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CiLinkedin } from 'react-icons/ci';
import { PiGithubLogo } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';
import { PiBoxingGloveDuotone } from 'react-icons/pi';

import Line from './Line';

const ContactInfo = () => {
  return (
    <Grid size={12} container spacing={2} direction="column">
      <Typography
        sx={{
          letterSpacing: 1,
          fontFamily: 'lobster',
          userSelect: 'none',
          fontSize: 20,
        }}
      >
        Contact Info
      </Typography>

      <Grid>
        <Typography
          href="https://www.linkedin.com/in/mohseni-nasab/"
          component="a"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1em' }}
        >
          <CiLinkedin />
          &nbsp;Linkedin
        </Typography>
        <Typography
          href="https://github.com/mohseninasab"
          component="a"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1em' }}
        >
          <PiGithubLogo />
          &nbsp;GitHub
        </Typography>
        <Typography
          href="mailto:mohseninasab.mehdi@gmail.com"
          component="a"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1em' }}
        >
          <IoMailOutline />
          &nbsp;mohseninasab.mehdi@gmail.com
        </Typography>
      </Grid>
      <Line size={12} color="secondary" />
      <Grid>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'end' }}>
          <Typography
            component="span"
            sx={{ lineHeight: '0.9', fontSize: '0.9em' }}
          >
            Made With&nbsp;
          </Typography>
          <PiBoxingGloveDuotone size={22} />
          <Typography
            component="span"
            sx={{ lineHeight: '0.9', fontSize: '0.9em' }}
          >
            &nbsp;By Mehdi Mohseni Nasab
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
