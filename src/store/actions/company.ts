export const TYPE_COMPANIES = Symbol('TYPE_COMPANIES')

export const setCompanies = (companies: any) => ({
    type: TYPE_COMPANIES,
    payload: companies,
  })