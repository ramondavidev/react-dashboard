import React from 'react';
import Page from '~/components/Page';
import {
  Container,
  Grid,
  Card,
  Box,
  useTheme,
  fade,
  Typography
} from '@material-ui/core';
import { CircularProgress, GaugeChart } from '~/components/Charts';
import useStyles from './cicloOperacional.style';
import Breadcrumb from './Breadcrumb';

const CicloOperacional = ({}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Dashboard Ciclo Operational">
      <Container maxWidth={false}>
        <Breadcrumb />
        <Box mb={2} mt={2}>
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
      </Container>
    </Page>
  );
};

export default CicloOperacional;
