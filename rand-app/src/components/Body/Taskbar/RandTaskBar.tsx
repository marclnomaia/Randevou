import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import { Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import RandTimeline from '../ExtraInfo/RandTimeline';


const RandTaskBar: React.FC = () => {


  const [messageBoxVisible, setMessageBoxVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [tabValue, setTabValue] = useState('timeline');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


  return (

    <Grid container spacing={0} padding={3} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{
          bgcolor: 'white',
          width: '100%',
          mt: -15,
          height: { xs: '5vh', md: '12vh', lg: '20vh' }
        }}>

          <Grid container spacing={1}>
            <Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 1 }}>
              <ChatBubbleTwoToneIcon
                sx={{
                  marginRight: 1,
                  fontSize: 18
                }}
              />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: 12,
                  ml: 3,
                  mt: -3
                }}
                onClick={() => setMessageBoxVisible(!messageBoxVisible)}
              >
                Send message
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                mt: -4,
                marginRight: 1,
                display: 'flex',
                flexDirection: 'row',
                height: 'auto',
                alignItems: 'center',
                backgroundColor: contactInfoVisible ? 'lightblue' : 'transparent',
                borderRadius: '1px',
                padding: '5px',
              }}
            />

            <Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 1 }}>
              <CheckTwoToneIcon
                sx={{
                  ml: 15,
                  fontSize: isMobile ? 12 : 16,
                  mt: isMobile ? 0 : -0
                }}
              />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: isMobile ? 8 : 12,
                  ml: 1,
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}
                onClick={() => setContactInfoVisible(!contactInfoVisible)}
              >
                Contacts
              </Typography>
            </Grid>

            <Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 1 }}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: isMobile ? 8 : 12,
                  ml: isMobile ? 4 : 2,
                  mt: isMobile ? 0.2 : 0.1,
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                Report user
              </Typography>
            </Grid>
          </Grid>


          <Grid item>
            {messageBoxVisible && (
              <Box
                sx={{//message box
                  marginTop: 3,
                  borderRadius: '10px',
                  padding: isMobile ? 1 : 2,
                  width: isMobile ? '250px' : '500px',
                  margin: '20px auto',

                }}
              >
                <Typography
                  sx={{
                    fontSize: isMobile ? 8 : 12,
                    ml: isMobile ? -15 : -60
                  }}
                >
                  This is where your message Box would go...
                </Typography>
              </Box>

            )}
          </Grid>
          <Grid item>
            {contactInfoVisible &&
              <Box
                sx={{//contact information when clicked//
                  marginTop: 3, borderRadius: '10px',
                  padding: isMobile ? 0.2 : 2,
                  width: isMobile ? '250PX' : '500px',
                  margin: '20px auto',
                  ml: 0,
                  mt: isMobile ? -6.2 : -7,
                }}>
                <Tabs
                  value={tabValue} onChange={handleChange} TabIndicatorProps={{
                    style: {
                      backgroundColor: 'blue',
                      width: '50%',

                    },
                  }}>
                  <Tab label={<Stack direction="row" spacing={isMobile ? 0.5 : 1} alignItems="center">
                    <VisibilityIcon
                      sx={{//timeline icon
                        fontSize: isMobile ? 10 : 15
                      }}
                    />
                    <Typography
                      sx={{//timeline menu
                        fontSize: isMobile ? 6 : 12

                      }}
                    >Timeline
                    </Typography>
                  </Stack>} value="timeline" />
                  <Tab label={<Stack direction="row" spacing={isMobile ? 0.5 : 1} alignItems="center">

                    <PersonIcon
                      sx={{//About icon
                        fontSize: isMobile ? 10 : 15
                      }}
                    />
                    <Typography
                      sx={{//about menu
                        fontSize: isMobile ? 6 : 12

                      }}
                    >About
                    </Typography>
                  </Stack>} value="about" />
                </Tabs>
                <Divider flexItem
                  sx={{//show timeline and About when clicked, and call RandTimeline//
                    width: isMobile ? 300 : 750, height: 2,
                    mt: -0.5, mb: 1, ml: 2
                  }} />

                {tabValue === 'timeline' && <RandTimeline />}
                {tabValue === 'about' &&
                  <Box
                    sx={{
                      marginTop: 3, fontSize: 12
                    }}>
                    <Typography variant="body2" component="div"
                      sx={{//contact information menu
                        marginBottom: 2, color: 'grey',
                        textAlign: 'left', fontSize: isMobile ? 8 : 12,
                        ml: isMobile ? 2 : 2
                      }}
                    >Contact Information
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box display="flex" gap={6}
                              sx={{
                                fontSize: isMobile ? 8 : 12
                              }}>
                              <Typography variant="body2" component="span"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                                }}
                              >Phone:
                              </Typography>
                              <Typography variant="body2" component="span" color="primary"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                                }}
                              >+4167318796
                              </Typography>
                            </Box>
                          } />

                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box
                              sx={{
                                width: 200, display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                              }}>
                              <Box display="flex" gap={3} flexDirection="row" alignItems="center" >
                                <Typography variant="body1" component="span"
                                  sx={{
                                    fontSize: isMobile ? 8 : 12, mt: -2, ml: 0
                                  }}>Address:</Typography>
                                <Typography variant="body1"
                                  sx={{
                                    fontSize: isMobile ? 8 : 12, color: 'black',
                                    ml: 2, mt: -2, width: '200px'
                                  }}
                                >525 E 68th Street
                                </Typography>
                              </Box>
                              <Typography variant="body2"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, color: 'black',
                                  paddingY: 2, width: '200px', ml: 11, mt: -2
                                }}
                              >New York, NY 10651-78 156-187-60
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box display="flex" gap={6} >
                              <Typography variant="body2" component="span"
                                sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                              >E-mail:
                              </Typography>
                              <Typography variant="body2" component="span" color="primary"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                                }}
                              >marcilino.damaia@gmail.com
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box display="flex" gap={8}>
                              <Typography variant="body2" component="span"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -2
                                }}
                              >Site:
                              </Typography>
                              <Typography variant="body2" component="span" color="primary"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, ml: -0.5, mt: -2
                                }}
                              >marcmaia.com
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    </List>
                    <Typography variant="body2" component="div"
                      sx={{
                        marginBottom: 2, color: 'grey', textAlign: 'left',
                        fontSize: isMobile ? 8 : 12, ml: 2
                      }}
                    >Basic Information
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box display="flex" gap={4} >
                              <Typography variant="body2"
                                sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                              >Birthday
                              </Typography>
                              <Typography variant="body2"
                                sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                              >June 5, 1992
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box display="flex" gap={4}>
                              <Typography variant="body2"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -2
                                }}
                              >Gender
                              </Typography>
                              <Typography variant="body2"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -2, ml: 0.5
                                }}
                              >Male
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    </List>
                  </Box>}
              </Box>
            }
          </Grid>
        </Box>
      </Grid>
    </Grid>

  );
}
export default RandTaskBar;