export const APP_VERSION = '1.0.0';
export const APP_ERROR = 'SIAFPLUS_ERROR';
export const APP_TOKEN = 'SIAFPLUS_TOKEN';
export const APP_USER = 'SIAFPLUS_USER';
export const APP_MENU = 'SIAFPLUS_MENU';
export const APP_THEME = 'SIAFPLUS_THEME';

export const BASE_API_URL = 'https://erp-api-test.adsoft.com.br/api';
export const NODE_API_URL = process.env.REACT_APP_URL_NODE_API;

export const ENABLE_REDUX_DEV_TOOLS = true;
export const DISABLE_REDUX_DEV_TOOLS = false;

export const THEMES = {
  DEFAULT: 'DEFAULT',
  DARK: 'DARK',
  UNICORN: 'UNICORN'
};

export const STATUS_PDV = {
  NOVO: 'NOVO',
  VENDA: 'VENDA',
  PAGAMENTO: 'PAGAMENTO'
};

export const TIPO_DOCUMENTO = {
  ORCAMENTO: 'ORCAMENTO',
  PEDIDO: 'PEDIDO',
  DOCUMENTOSAIDA: 'DOCUMENTOSAIDA'
};

export const STATUS_MONITOR = {
  PENDETES: 'pendentes',
  ABERTOS: 'abertos',
  BLOQUEADOS: 'bloqueados',
  FATURADOS: 'faturados',
  CANCELADOS: 'cancelados',
  REJEITADOS: 'rejeitados'
};

export const FILTRO_DATA = {
  HOJE: 'hoje',
  ONTEM: 'ontem',
  ESTA_SEMANA: 'esta-semana',
  ESTE_MES: 'este-mes',
  TODOS: 'todos'
};

/**
 * Os títulos financeiros podem ter finalidades diferentes,
 * pensando nisso o campo tipo serve para categorizar os títulos nos tipos:
 *
 *  0 - Título normal,
 *  1 - Notas de crédito (Saldo de crédito do cliente),
 *  2 - Recebimento antecipado (crédito antecipado),
 *  3 - Notas de débito (saldo crédito com o fornecedor),
 *  4 - Pagamento antecipado ao fornecedor
 * */
export const TITULOS_TIPO = [
  'Título normal',
  'Notas de crédito',
  'Recebimento antecipado',
  'Notas de débito',
  'Pagamento antecipado'
];
export const DOCUMENTO_FINALIDADE = [
  'Não se aplica (quando cupom fiscal)',
  'NFe Normal',
  'NFe complementar',
  'NFe de ajuste',
  'Devolução de mercadoria'
];
export const DOCUMENTO_TRANSMISSAO = [
  'Não se aplica',
  'Não transmitido',
  'Documento transmitido',
  'Aguardando transmissão',
  'Em processamento',
  'Denegado'
];
export const PEDIDO_SITUACAO = [
  'Fechado',
  'Aberto',
  'Parcialmente faturado',
  'Bloqueado',
  'Rejeitado crédito',
  'Rejeitado estoque',
  'Rejeitado regra comercial de negócio',
  'Rejeitado regra comercial de desconto'
];
export const PEDIDO_BLOQUEIO = [
  'Pedido liberado',
  'Bloqueado por crédito',
  'Bloqueado por estoque',
  'Bloqueado por regra comercial negocio',
  'Bloqueado por inadimplência',
  'Bloqueado por importação PDV',
  'Bloqueado por regra comercial desconto'
];
