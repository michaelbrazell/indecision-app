// Testing Arrow functions
// Passing

// Traditional Arrow function.  Always anonymous, still has function body
const firstName = (fullName) => {
  return fullName.split(' ')[0]
};

// SHorthand...  implicit return, lacks function body
const firstNameShort = (fullName) => fullName.split(' ')[0];

console.log( firstName('Mike Murray') );
console.log( firstNameShort('Taylor Nunez'));