const parseArgs = () => {
    const args = process.argv.slice(2)
    let result = []
    args.map((arg, index) => {
      if (arg.startsWith('--') && (index + 1) < args.length) {
        result.push(`${arg.slice(2)} is ${args[index + 1]}`);
      }
    })
    console.log(result.join(', '))
    // Write your code here 
  };
  
  
  parseArgs()
  