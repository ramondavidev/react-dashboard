const normalizeError = error => {
  if (error?.response) {
    return (
      error?.response?.data?.extras?.help ||
      error?.response?.data?.message ||
      'Ocorreu um erro na sua solicitação'
    );
  }

  return error?.message;
};

export default normalizeError;
