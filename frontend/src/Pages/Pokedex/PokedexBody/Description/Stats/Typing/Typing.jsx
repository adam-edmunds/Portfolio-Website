/* eslint-disable array-callback-return */
import { Box, Divider, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import pSBC from 'shade-blend-color';
import { calculateType } from '../../../../../../Utils/Resources/types';
import { types } from '../../../../../../Utils/Resources/typeExporter';
import { toTitleCase } from '../../../../../../Utils/Resources/helperFunctions';

export const Typing = () => {
  const { data: pokedexData } = useSelector((state) => state.pokedex);

  const [typeOneData, setTypeOneData] = useState('none');
  const [typeTwoData, setTypeTwoData] = useState('none');

  useEffect(() => {
    if (pokedexData) {
      axios.get(pokedexData.types[0].type.url).then((res) => {
        setTypeOneData(res.data);
      });
      if (pokedexData.types.length > 1) {
        axios.get(pokedexData.types[1].type.url).then((res) => {
          setTypeTwoData(res.data);
        });
      } else {
        setTypeTwoData('none');
      }
    }
  }, [pokedexData]);

  const typeSet = calculateType(typeOneData.name, typeTwoData.name);

  return typeSet ? (
    <Grid item xs={12} xl={4}>
      <Typography
        variant='h4'
        mt={5}
        mb={2}
        textAlign='center'
        fontWeight={500}
      >
        WEAKNESSES
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' textAlign='center'>
            0x
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {typeSet['0x'].length === 0 ? (
              <Typography variant='h6' textAlign='center'>
                None
              </Typography>
            ) : (
              typeSet['0x'].map((key) => {
                return (
                  <Tooltip title={toTitleCase(key)} key={key}>
                    <Box
                      component='img'
                      boxShadow={4}
                      src={types[key].icon}
                      alt={key}
                      sx={{
                        background: pSBC(0.3, types[key].color, '#FFF'),
                        borderRadius: '50%',
                        p: 1,
                        maxWidth: { xs: '15%', md: '10%' },
                        boxShadow: `0 0 1em ${types[key].color}`,
                        border: `1px solid ${pSBC(
                          0.2,
                          types[key].color,
                          '#FFF'
                        )}`,
                      }}
                    />
                  </Tooltip>
                );
              })
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' textAlign='center'>
            0.25x
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {typeSet['0.25x'].length === 0 ? (
              <Typography variant='h6' textAlign='center'>
                None
              </Typography>
            ) : (
              typeSet['0.25x'].map((key) => {
                return (
                  <Tooltip title={toTitleCase(key)} key={key}>
                    <Box
                      component='img'
                      boxShadow={4}
                      src={types[key].icon}
                      alt={key}
                      sx={{
                        background: pSBC(0.3, types[key].color, '#FFF'),
                        borderRadius: '50%',
                        p: 1,
                        maxWidth: { xs: '15%', md: '10%' },
                        boxShadow: `0 0 1em ${types[key].color}`,
                        border: `1px solid ${pSBC(
                          0.2,
                          types[key].color,
                          '#FFF'
                        )}`,
                      }}
                    />
                  </Tooltip>
                );
              })
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' textAlign='center'>
            0.5x
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {typeSet['0.5x'].length === 0 ? (
              <Typography variant='h6' textAlign='center'>
                None
              </Typography>
            ) : (
              typeSet['0.5x'].map((key) => {
                return (
                  <Tooltip title={toTitleCase(key)} key={key}>
                    <Box
                      component='img'
                      boxShadow={4}
                      src={types[key].icon}
                      alt={key}
                      sx={{
                        background: pSBC(0.3, types[key].color, '#FFF'),
                        borderRadius: '50%',
                        p: 1,
                        maxWidth: { xs: '15%', md: '10%' },
                        boxShadow: `0 0 1em ${types[key].color}`,
                        border: `1px solid ${pSBC(
                          0.2,
                          types[key].color,
                          '#FFF'
                        )}`,
                      }}
                    />
                  </Tooltip>
                );
              })
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' textAlign='center'>
            2x
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {typeSet['2x'].length === 0 ? (
              <Typography variant='h6' textAlign='center'>
                None
              </Typography>
            ) : (
              typeSet['2x'].map((key) => {
                return (
                  <Tooltip title={toTitleCase(key)} key={key}>
                    <Box
                      component='img'
                      boxShadow={4}
                      src={types[key].icon}
                      alt={key}
                      sx={{
                        background: pSBC(0.3, types[key].color, '#FFF'),
                        borderRadius: '50%',
                        p: 1,
                        maxWidth: { xs: '15%', md: '10%' },
                        boxShadow: `0 0 1em ${types[key].color}`,
                        border: `1px solid ${pSBC(
                          0.2,
                          types[key].color,
                          '#FFF'
                        )}`,
                      }}
                    />
                  </Tooltip>
                );
              })
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' textAlign='center'>
            4x
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {typeSet['4x'].length === 0 ? (
              <Typography variant='h6' textAlign='center'>
                None
              </Typography>
            ) : (
              typeSet['4x'].map((key) => {
                return (
                  <Tooltip title={toTitleCase(key)} key={key}>
                    <Box
                      component='img'
                      boxShadow={4}
                      src={types[key].icon}
                      alt={key}
                      sx={{
                        background: pSBC(0.3, types[key].color, '#FFF'),
                        borderRadius: '50%',
                        p: 1,
                        maxWidth: { xs: '15%', md: '10%' },
                        boxShadow: `0 0 1em ${types[key].color}`,
                        border: `1px solid ${pSBC(
                          0.2,
                          types[key].color,
                          '#FFF'
                        )}`,
                      }}
                    />
                  </Tooltip>
                );
              })
            )}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Fragment>No Data</Fragment>
  );
};
