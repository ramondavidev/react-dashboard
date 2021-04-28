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
  ChartDonut,
  ChartPizza,
  ChartBars
} from '~/components/Charts';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CicloOperacional = ({}) => {
  const theme = useTheme();
  const classes = useStyles();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef();
  const [vendas, setVendas] = useState(data);

  useEffect(() => {
    setCardWidth(cardRef.current?.offsetWidth);
  }, []);

  return (
    <Page className={classes.root} title="Dashboard Faturamento">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card ref={cardRef}>
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
                  <ChartDonut
                    width={cardWidth}
                    theme={theme}
                    data={vendas.vendaGrupoProduto}
                    nameKey="name"
                    dataKey="value"
                    startAngle={360}
                    endAngle={0}
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
                  <ChartPizza
                    width={cardWidth}
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
                    width={cardWidth}
                    theme={theme}
                    data={vendas.rankingPorProduto}
                    nameKey="name"
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
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
                    width={cardWidth}
                    theme={theme}
                    data={vendas.metaVendedor}
                    nameKey="nome"
                    dataKey={['vendas', 'meta']}
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

export default CicloOperacional;
