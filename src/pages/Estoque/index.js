import React, { useEffect, useState, useRef, useCallback } from 'react';
import Page from '~/components/Page';
import {
  Container,
  Grid,
  Card,
  Box,
  Divider,
  CardHeader,
  useTheme,
  fade,
  Typography
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  ChartBarSimple,
  ChartLine,
  ChartBars,
  CircularProgress,
  BarProgress,
  GaugeChart
} from '~/components/Charts';
import useStyles from './estoque.style';
import Breadcrumb from './Breadcrumb';
import Filter, { drawerWidth } from '~/components/Filter';
import clsx from 'clsx';

function Estoque() {
  const theme = useTheme();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef();
  const [vendas, setVendas] = useState(data);
  const [drawer, setDrawer] = useState(true);
  const classes = useStyles(drawer, drawerWidth);

  useEffect(() => {
    setCardWidth(cardRef.current?.offsetWidth);
  }, []);

  const getMenuDrawerIsOpen = useCallback(status => {
    setDrawer(status);
  }, []);

  return (
    <Page className={classes.root} title="Dashboard Estoque">
      <Container
        maxWidth={false}
        style={{ display: 'flex', flexDirection: 'column' }}
        className={clsx(classes.content, {
          [classes.contentShift]: !drawer
        })}
      >
        <Breadcrumb />
        <Grid container>
          <Box mb={2} mt={2} width="100%">
            <Card>
              <Grid alignItems="center" container justify="space-evenly">
                <Grid className={classes.item} item md={4} sm={6} xs={12}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    style={{ lineHeight: 1.3 }}
                  >
                    Indices de perdas no estoque
                  </Typography>
                  <div className={classes.valueContainer}>
                    <CircularProgress
                      theme={theme}
                      value={50}
                      labelAfterValue="%"
                      size={100}
                    />
                  </div>
                </Grid>
                <Grid className={classes.item} item md={4} sm={6} xs={12}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    style={{ lineHeight: 1.3 }}
                  >
                    Prazo médio de estocagem
                  </Typography>
                  <div className={classes.valueContainer}>
                    <BarProgress
                      theme={theme}
                      value={30}
                      labelAfterValue="Dias"
                      size={160}
                    />
                  </div>
                </Grid>
                <Grid className={classes.item} item md={4} sm={6} xs={12}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    style={{ lineHeight: 1.3 }}
                  >
                    Itens abaixo do ponto de pedido
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
              </Grid>
            </Card>
          </Box>

          <Filter getMenuDrawerIsOpen={getMenuDrawerIsOpen} />
        </Grid>
        <Grid
          container
          spacing={2}
          className={clsx(classes.content, {
            [classes.contentShift]: drawer
          })}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card ref={cardRef}>
              <CardHeader title="Estoque médio por mês" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  pt={4}
                  pr={2}
                  pl={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChartBarSimple
                    width={cardWidth}
                    theme={theme}
                    data={vendas.estoqueMedioPorMes}
                    nameKey="name"
                    dataKey="estoque"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Faturamento X Compras" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  pt={4}
                  pr={2}
                  pl={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChartBars
                    width={cardWidth}
                    alignment="horizontal"
                    theme={theme}
                    data={vendas.faturamentoXCompras}
                    nameKey="name"
                    dataKey={['faturamento', 'compras']}
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Quantidade de itens no estoque" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  pt={4}
                  pr={2}
                  pl={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChartLine
                    width={cardWidth}
                    theme={theme}
                    data={vendas.quantidadeItemsEstoque}
                    nameKey="name"
                    dataKey="faturamento"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Produtos sem movimento" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  pt={4}
                  pr={2}
                  pl={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChartBarSimple
                    width={cardWidth}
                    theme={theme}
                    alignment="vertical"
                    data={vendas.produtosSemMovimento}
                    nameKey="name"
                    dataKey="value"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

const data = {
  quantidadeItemsEstoque: [
    { name: 'JAN', faturamento: 15 },
    { name: 'FEV', faturamento: 38 },
    { name: 'MAR', faturamento: 30 },
    { name: 'ABR', faturamento: 32 }
  ],
  faturamentoXCompras: [
    { name: 'JAN', faturamento: 15, compras: 18 },
    { name: 'FEV', faturamento: 38, compras: 38 },
    { name: 'MAR', faturamento: 38, compras: 30 },
    { name: 'ABR', faturamento: 45, compras: 40 },
    { name: 'MAI', faturamento: 35, compras: 33 }
  ],
  estoqueMedioPorMes: [
    { name: 'JAN', estoque: 10 },
    { name: 'FEV', estoque: 20 },
    { name: 'MAR', estoque: 30 },
    { name: 'ABR', estoque: 40 }
  ],
  produtosSemMovimento: [
    { name: 'PRO1', value: 10 },
    { name: 'PRO2', value: 15 },
    { name: 'PRO3', value: 20 },
    { name: 'PRO4', value: 35 },
    { name: 'PRO5', value: 38 }
  ]
};

export default Estoque;
