import React, { useEffect, useState, useCallback } from 'react';
import Page from '~/components/Page';
import {
  Container,
  Grid,
  Card,
  Box,
  useTheme,
  CardHeader,
  Divider,
  fade,
  Typography
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { 
  CircularProgress, 
  GaugeChart, 
  MultipleLineChart, 
  ComposedBar, 
  SingleChartLine, 
  ChartDoubleLine, 
  StackedBar,
  ChartText 
} from '~/components/Charts';
import useStyles from './cicloOperacional.style';
import Breadcrumb from './Breadcrumb';
import Filter from '~/components/Filter';
import clsx from 'clsx';

const CicloOperacional = ({}) => {
  const theme = useTheme();
  const classes = useStyles();
  const [drawer, setDrawer] = useState(true);

  const getMenuDrawerIsOpen = useCallback(status => {
    setDrawer(status);
  }, []);

  return (
    <Page className={classes.root} title="Dashboard Ciclo Operational">
      <Container
        maxWidth={false}
        style={{ display: 'flex', flexDirection: 'column' }}
        className={clsx(classes.content, {
          [classes.contentShift]: !drawer
        })}
      >
        <Breadcrumb />
        <Filter getMenuDrawerIsOpen={getMenuDrawerIsOpen} />
        <Box mb={2} mt={2} width="100%">
          <Card>
            <Grid alignItems="center" container justify="space-evenly">

              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Prazo médio de estocagem
                </Typography>
                <div className={classes.valueContainer}>
                  <CircularProgress
                    theme={theme}
                    value={50.5}
                    labelAfterValue="%"
                    size={100}
                  />
                </div>
              </Grid>

              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Prazo médio de recebimento
                </Typography>
                <div className={classes.valueContainer}>
                  <CircularProgress
                    theme={theme}
                    value={45.3}
                    labelAfterValue="%"
                    size={100}
                  />
                </div>
              </Grid>

              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Prazo médio de pagamento
                </Typography>
                <div className={classes.valueContainer}>
                  <CircularProgress
                    theme={theme}
                    value={32.2}
                    labelAfterValue="%"
                    size={100}
                  />
                </div>
              </Grid>
              
              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  CMV
                </Typography>
                <div className={classes.valueContainer}>
                  <CircularProgress
                    theme={theme}
                    value={65.2}
                    labelAfterValue="%"
                    size={100}
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box mb={2}>
          <Card>
            <Grid alignItems="center" container justify="space-evenly">

              <Grid className={classes.item} item md={4} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Capital de giro
                </Typography>
                <div className={classes.valueContainer}>
                  <GaugeChart
                    theme={theme}
                    value={0.3}
                    color={[
                      fade('#0068e9', 0.3),
                      fade('#0068e9', 0.6),
                      fade('#0068e9', 0.9)
                    ]}
                    size={350}
                  />
                </div>
              </Grid>

              <Grid className={classes.item} item md={4} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Capital de necessário
                </Typography>
                <div className={classes.valueContainer}>
                  <GaugeChart
                    theme={theme}
                    value={0.3}
                    color={[
                      fade('#0068e9', 0.3),
                      fade('#0068e9', 0.6),
                      fade('#0068e9', 0.9)
                    ]}
                    size={350}
                  />
                </div>
              </Grid>
              
              <Grid className={classes.item} item md={4} sm={6} xs={12}>
                <Typography
                  component="h2"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Ciclo financeiro
                </Typography>
                <div className={classes.valueContainer}>
                  <GaugeChart
                    theme={theme}
                    value={0.46}
                    needleColor="transparent"
                    needleBaseColor="transparent"
                    color={[
                      fade('#0068e9', 0.3),
                      fade('#0068e9', 0.6),
                      fade('#0068e9', 0.9)
                    ]}
                    size={350}
                  />
                </div>
              </Grid>
              
            </Grid>
          </Card>
        </Box>


        <Grid alignItems="center" spacing={2} container justify="space-evenly">

          <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader title="Análise" />
                <Divider />
                <Box
                    width="100%"
                    pt={4}
                    pr={2}
                    pl={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                  <MultipleLineChart theme={theme} />
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader title="Receitas e Despesas" />
                <Divider />
                <Box
                    width="100%"
                    pt={4}
                    pr={2}
                    pl={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ComposedBar theme={theme} />
                  </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader title="Lucro Líquido Acumulado no Ano" />
                <Divider />
                <PerfectScrollbar >
                <Box
                    width="100%"
                    pt={4}
                    pr={2}
                    pl={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <SingleChartLine theme={theme} />
                  </Box>
                </PerfectScrollbar>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader title="Resultado de Vendas" />
                <Divider />
                <Box
                    width="100%"
                    pt={4}
                    pr={2}
                    pl={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ChartDoubleLine theme={theme} />
                  </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardHeader title="Top 7 Vendas por Vendedor com Marg. de Contrib." />
                <Divider />
                <Box
                    width="100%"
                    pt={4}
                    pr={2}
                    pl={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StackedBar alignment="vertical" theme={theme} />
                  </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ChartText />
            </Grid>

          </Grid>

      </Container>
    </Page>
  );
};

export default CicloOperacional;
