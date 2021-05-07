import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader, Divider } from '@material-ui/core';
import useStyles from './index.styles';



const SimpleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardHeader title="Demonstração de Resultados" />
        <Divider />
        <CardContent className={classes.content}>
            
            <div style={{marginLeft: '20px', marginTop: '15px'}}>
                
                <div className={classes.line}>
                    <div className={classes.bold}> Bens vendidos </div>
                    <div className={classes.containerResult}> <span>85.750,00 R$</span> <span>70%</span> </div>
                </div>
                <div className={classes.line}>
                    <div className={classes.bold}>  Lucro Bruto </div>
                    <div className={classes.containerResult}> <span>36.750,00 R$</span> <span>30%</span> </div>
                </div>
                <div className={classes.line}>
                    <div className={classes.bold}>  Total Despesas </div>
                    <div className={classes.containerResult}> <span>15.925,00 R$</span> <span>13%</span> </div>
                </div>
                <div className={classes.line}>
                    <div className={classes.bold}>  Lucro Operacional </div>
                    <div className={classes.containerResult}> <span>20.825,00 R$</span> <span>17%</span> </div>
                </div>
                <div className={classes.line}>
                    <div className={classes.bold}>  Imposto s/ Lucro </div>
                    <div className={classes.containerResult}> <span>4.998,00 R$</span> <span>24%</span> </div>
                </div>
                <div className={classes.line}>
                    <div className={classes.bold}>  Lucro Líquido </div>
                    <div className={classes.containerResult}> <span>15.827,00 R$</span> <span>13%</span> </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                <div className={classes.bold}> Faturamento Total </div>
                <div className={classes.containerResult}> <span>122.500,00 R$</span> <span>100%</span> </div>
            </div>
            <hr />
        </CardContent>
        <CardActions>
            <Button size="small">Saiba Mais</Button>
        </CardActions>
    </Card>
  );
}

export default SimpleCard;