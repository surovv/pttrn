// isMatched :: (a, b) -> Bool
const isMatched = (pattern, val) => (pattern === val)
  || (pattern === val.constructor);


// match :: (a, [[b, a -> c]]) -> Object
export const match = (val, patterns = []) => ({
  when: (pattern, pval) => match(val, [...patterns, [pattern, pval]]),

  default: defFn => {
    const finded = patterns.find(([pattern, result]) => isMatched(pattern, val));
    return (finded ? finded[1] : defFn)(val)
  },
});



export default match;