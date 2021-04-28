import React, { useEffect, useState, useRef } from 'react';
import Page from '~/components/Page';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Box,
  Divider,
  CardHeader,
  useTheme,
  fade
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  ChartBarSimple,
  ChartLine,
  ChartBars,
  CircularProgress,
  BarProgress,
  BarProgressCurve
} from '~/components/Charts';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function Estoque() {
  const theme = useTheme();
  const classes = useStyles();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef();
  const [vendas, setVendas] = useState(data);

  useEffect(() => {
    setCardWidth(cardRef.current?.offsetWidth);
  }, []);

  return (
    <Page className={classes.root} title="Dashboard Estoque">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
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
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Indices de perdas no estoque" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  height={332}
                  pt={4}
                  px={2}
                  pb={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CircularProgress
                    theme={theme}
                    value={50}
                    labelAfterValue="%"
                    size={160}
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Prazo médio de estocagem" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  height={332}
                  pt={4}
                  px={2}
                  pb={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BarProgress
                    theme={theme}
                    value={30}
                    labelAfterValue="Dias"
                    size={160}
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Itens abaixo do ponto de pedido" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  height={332}
                  pt={4}
                  px={2}
                  pb={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BarProgressCurve
                    theme={theme}
                    value={30}
                    labelAfterValue="Curve"
                    size={160}
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
