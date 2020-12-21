class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '') // removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  }

  static titleize(string) {
    let except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let result = []
    let arrayOfWords = string.split(" ")
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if ( except.includes(arrayOfWords[n])){
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return result.join(" ");
  }
}