export const TextFormatter = (props: { str: string }) => {
    const toCamelCase = (str: string) => {
        return str
          .split(/[\s-_]+/)
          .map((word, index) => {
            if (index === 0) {
              return word
            }
            return +" "+word.charAt(0).toUpperCase()+" " + word.slice(1).toLowerCase();
          })
          .join('');
      };

    return toCamelCase(props.str);
}