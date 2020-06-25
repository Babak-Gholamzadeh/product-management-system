const normalizeQuery = query => {
  const queryStr = JSON.stringify(query)
    .replace(/\b(gt|gte|lt|lte|in|nin|ne)\b/g, match => `$${match}`);
  return (function parseArrayValues(query) {
    Object.keys(query).forEach(key => {
      if (typeof query[key] === 'string' && query[key].includes(','))
        query[key] = query[key].split(',');
      else if (typeof query[key] === 'object')
        query[key] = parseArrayValues(query[key]);
    });
    return query;
  })(JSON.parse(queryStr));
};

const findDocsFromQuery = ({ reqQuery = {}, model, populate }) => {
  let { fields, sort, skip, limit, ...query } = reqQuery;

  fields = fields && fields.replace(/,/g, ' ');
  sort = sort && sort.replace(/,/g, ' ');

  const modelQuery = model.find(normalizeQuery(query)).populate(populate);
  return modelQuery
    .select(fields)
    .sort(sort)
    .skip(+skip)
    .limit(+limit);
};

module.exports = findDocsFromQuery;
