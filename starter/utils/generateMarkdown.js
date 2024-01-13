//making badge with switch statements
function generateBadge(data){
  let badge="";
  let licence=data.licence;
  switch( licence) {
    case "Apache":
      badge="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GNU general public licence":
       badge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
      case "MIT":
        badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "BSD 2-Clause":
        badge="[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "BSD 3-Clause" :
      badge="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
      case "Boost":
      badge="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
      case "Creative Commons Zero":
      badge="[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      break;
      case "Mozilla Public":
        badge="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
        case "The unlicense":
          badge="[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
          break;
  }
return badge;
 }

// function to generate markdown for README
function generateMarkdown(data) {
  const badgeNorm = generateBadge(data);
  return `# ${data.title}
  ${badgeNorm}
  ## Description 
  ${data.description}
  ## Table of Contents 
  - [Instalation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  ${data.licence}
  ## Contributing 
  ${data.contribution}
  ## Tests
  ${data.tests} 
  ## Questions
  Github: https://github.com/${data.github}
  Email: ${data.email}
  ${data.contact}

`;
}

module.exports = generateMarkdown;
