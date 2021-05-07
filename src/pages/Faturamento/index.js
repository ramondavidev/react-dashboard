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
  ChartDonut,
  ChartPizza,
  ChartLine,
  ChartBars
} from '~/components/Charts';
import Breadcrumb from './Breadcrumb';
import useStyles from './faturamento.styles';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Filter from '~/components/Filter';
import clsx from 'clsx';

function DashboardVendas(props) {
  const theme = useTheme();
  const classes = useStyles();
  //const [300, setCardWidth] = useState(0);
  const cardRef = useRef();
  const [vendas, setVendas] = useState(data);
  const [drawer, setDrawer] = useState(true);

  const getMenuDrawerIsOpen = useCallback(
    status => {
      setDrawer(status);
    },
    [drawer]
  );

  return (
    <Page className={classes.root} title="Dashboard Faturamento">
      <Container
        maxWidth={false}
        style={{ display: 'flex', flexDirection: 'column' }}
        className={clsx(classes.content, {
          [classes.contentShift]: !drawer
        })}
      >
        <Breadcrumb />
        <Filter getMenuDrawerIsOpen={getMenuDrawerIsOpen} drawer={drawer} />
        <Grid
          container
          style={{
            flexWrap: 'nowrap',
            width: drawer ? 'calc(100% - 20px)' : '100%'
          }}
        >
          <Box mb={2} mt={2} width="100%">
            <Card style={{ overflowX: 'scroll' }}>
              <Grid
                alignItems="center"
                container
                justify="space-evenly"
                style={{
                  flexWrap: 'nowrap'
                }}
              >
                <Box className={classes.item}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    noWrap={true}
                  >
                    Faturamento bruto
                  </Typography>
                  <div className={classes.valueContainer}>
                    <MonetizationOnOutlinedIcon
                      className={classes.iconHeader}
                    />
                    <Typography
                      component="h2"
                      gutterBottom
                      variant="overline"
                      color="textSecondary"
                      noWrap={true}
                    >
                      R$ 1.800.231,00
                    </Typography>
                  </div>
                </Box>
                <Box className={classes.item}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    noWrap={true}
                  >
                    QTD.COMPRADORES
                  </Typography>
                  <div className={classes.valueContainer}>
                    <MonetizationOnOutlinedIcon
                      className={classes.iconHeader}
                    />
                    <Typography
                      component="h2"
                      gutterBottom
                      variant="overline"
                      color="textSecondary"
                      noWrap={true}
                    >
                      3.500
                    </Typography>
                  </div>
                </Box>
                <Box className={classes.item}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    noWrap={true}
                  >
                    Ticket médio
                  </Typography>
                  <div className={classes.valueContainer}>
                    <MonetizationOnOutlinedIcon
                      className={classes.iconHeader}
                    />
                    <Typography
                      component="h2"
                      gutterBottom
                      variant="overline"
                      color="textSecondary"
                      noWrap={true}
                    >
                      R$ 1.800.231,00
                    </Typography>
                  </div>
                </Box>
                <Box className={classes.item}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    noWrap={true}
                  >
                    C.M.V
                  </Typography>
                  <div className={classes.valueContainer}>
                    <MonetizationOnOutlinedIcon
                      className={classes.iconHeader}
                    />
                    <Typography
                      component="h2"
                      gutterBottom
                      variant="overline"
                      color="textSecondary"
                      noWrap={true}
                    >
                      R$ 1.800.231,00
                    </Typography>
                  </div>
                </Box>
                <Box className={classes.item}>
                  <Typography
                    component="h2"
                    variant="overline"
                    color="textSecondary"
                    noWrap={true}
                  >
                    Margem contribuição
                  </Typography>
                  <div className={classes.valueContainer}>
                    <MonetizationOnOutlinedIcon
                      className={classes.iconHeader}
                    />
                    <Typography
                      component="h2"
                      gutterBottom
                      variant="overline"
                      color="textSecondary"
                      noWrap={true}
                    >
                      R$ 561.450,00
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Card>
          </Box>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Faturamento periodo" />
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
                    width={300}
                    theme={theme}
                    data={vendas.faturamentoPeriodo}
                    nameKey="name"
                    dataKey="faturamento"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Venda grupo de produto" />
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
                  <ChartDonut
                    width={300}
                    theme={theme}
                    data={vendas.vendaGrupoProduto}
                    nameKey="name"
                    dataKey="value"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Ranking por produto" />
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
                  <ChartDonut
                    width={300}
                    theme={theme}
                    data={vendas.rankingPorProduto}
                    nameKey="name"
                    dataKey="value"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Meta X Realizado vendendor" />
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
                    width={300}
                    theme={theme}
                    data={vendas.metaVendedor}
                    nameKey="nome"
                    dataKey={['vendas', 'meta']}
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Venda meio de pagamento" />
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
                  <ChartPizza
                    width={300}
                    theme={theme}
                    data={vendas.vendasMeioPagamento}
                    nameKey="nome"
                    dataKey="valor"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Ranking por cliente" />
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
                    width={300}
                    theme={theme}
                    data={vendas.rankingPorCliente}
                    nameKey="name"
                    dataKey="value"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Ranking por vendedor" />
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
                    width={300}
                    theme={theme}
                    data={vendas.rankingPorVendendor}
                    nameKey="name"
                    dataKey="value"
                  />
                </Box>
              </PerfectScrollbar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Vendas por fornecedor" />
              <Divider />
              <PerfectScrollbar>
                <Box
                  width="100%"
                  height="100%"
                  pt={4}
                  pr={2}
                  pl={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChartBarSimple
                    alignment="vertical"
                    width={300}
                    theme={theme}
                    data={vendas.vendasPorFornecedor}
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
  faturamentoPeriodo: [
    { name: 'JAN', faturamento: 15 },
    { name: 'FEV', faturamento: 38 },
    { name: 'MAR', faturamento: 30 },
    { name: 'ABR', faturamento: 32 }
  ],
  metaVendedor: [
    { nome: 'VEN1', vendas: 6, meta: 8 },
    { nome: 'VEN2', vendas: 7, meta: 6 },
    { nome: 'VEN3', vendas: 9, meta: 10 },
    { nome: 'VEN4', vendas: 5, meta: 15 }
  ],
  rankingPorProduto: [
    { name: 'PRO1', value: 10, fill: fade('#00e2ff', 0.1) },
    { name: 'PRO2', value: 15, fill: fade('#00e2ff', 0.25) },
    { name: 'PRO3', value: 20, fill: fade('#00e2ff', 0.5) },
    { name: 'PRO4', value: 25, fill: fade('#00e2ff', 0.75) },
    { name: 'PRO5', value: 30, fill: fade('#00e2ff', 0.99) }
  ],
  vendaGrupoProduto: [
    { name: 'Grupo 1', value: 11, fill: fade('#00e2ff', 0.1) },
    { name: 'Grupo 2', value: 25, fill: fade('#00e2ff', 0.25) },
    { name: 'Grupo 3', value: 33, fill: fade('#00e2ff', 0.55) },
    { name: 'Grupo 4', value: 38, fill: fade('#00e2ff', 0.75) },
    { name: 'Grupo 5', value: 43, fill: fade('#00e2ff', 0.99) }
  ],
  vendasMeioPagamento: [
    { nome: 'Carteira', valor: 28.7, fill: fade('#00e2ff', 0.1) },
    { nome: 'Debito', valor: 14.4, fill: fade('#00e2ff', 0.25) },
    { nome: 'Credito', valor: 2.3, fill: fade('#00e2ff', 0.55) },
    { nome: 'Cheque', valor: 8.7, fill: fade('#00e2ff', 0.75) },
    { nome: 'Dinheiro', valor: 46.7, fill: fade('#00e2ff', 0.99) }
  ],
  rankingPorCliente: [
    { name: 'CLI1', value: 18 },
    { name: 'CLI2', value: 15 },
    { name: 'CLI3', value: 12 },
    { name: 'CLI4', value: 9 },
    { name: 'CLI5', value: 8 }
  ],
  rankingPorVendendor: [
    { name: 'VEN1', value: 18 },
    { name: 'VEN2', value: 15 },
    { name: 'VEN3', value: 12 },
    { name: 'VEN4', value: 9 },
    { name: 'VEN5', value: 8 }
  ],
  vendasPorFornecedor: [
    { name: 'FOR1', value: 18 },
    { name: 'FOR2', value: 15 },
    { name: 'FOR3', value: 12 },
    { name: 'FOR4', value: 9 },
    { name: 'FOR5', value: 8 }
  ]
};

export default DashboardVendas;
