const badgeBuilder = function({ title, description, installation, usage, contribution, test, user, email, license, }) {

    if (license === "MIT") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license === 'ISC') {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if (license === "GNU GPL v3") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (license === "Eclipse") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    };
}