const isThisAPalindrome = function(palindrome) {
  const lowerCasePalindrome = palindrome.toLowerCase()
  const reversePalindrome = lowerCasePalindrome.split('').reverse().join('');
  if(reversePalindrome == lowerCasePalindrome) { 
    return "This is a palindrome"
  } else if (reversePalindrome != lowerCasePalindrome) { 
    return "This is not a palindrome"
  }
}