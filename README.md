<img src="epicodus.png" align="right">

# Angular2 Zoo Tracker

> **Technologies Used** - TypeScript, Javascript, HTML, CSS.
> **IDE Used** - Atom.

#### By _**Mara Timberlake**_

Application for zoo workers to add newly-admitted animals, their likes & dislikes, and the number of caretakers each requires.

## Description

_This application allows users to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike. The user may also view a list of animals previously logged, view animals specific to their age (young or mature 2+ years), and edit the animal's name, age or caretakers if necessary._

## Planning

1. Configuration/dependencies
  * Angular2
  * TypeScript
  * Node
  * Gulp

2. Specs

  * Spec 1: User creates an new animal admitted form, fills out new animal form, new animal appears on bottom of page.
  * Spec 2: User edits animal details, user clicks 'Edit Animal' button and fills out form, information changes in realtime

3. Integration
  * Components for Creating New Animal
  * Components for Viewing Animal List
  * Components for Editing Animal Details

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Display of the total number of caretakers needed in a day
  * Add a property that generates a timestamp of when each animal was admitted
  * Expand the application to differentiate between animals' species -- group accordingly

## What's included
Within the repository you'll find the following directories and files:

```
angular2-zoo-tracker/
├── app/
|    └── age-increase.component.ts
|    └── age-pipe.ts
|    └── animal-list.component.ts
|    └── animal.model.ts
|    └── app.component.ts
|    └── app.module.ts
|    └── edit-animal.component.ts
|    └── main.ts
|    └── new-animal.component.ts
├── .gitignore
├── bower.json
├── gulpfile.js
├── index.html
├── package.json
├── README.md
├── systemjs.config.js
└── tsconfig.json
```
## Prerequisites/Installation Requirements

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)

## Setup
To run this program:
* _LOCAL: Go to Terminal_
* `git clone https://github.com/Epicodus-MT/angular2-zoo-tracker.git`
* `cd angular2-zoo-tracker`
* `npm install`
* `bower install`

## Running / Development
* `gulp build`
* `gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

Copyright (c) 2017 *_Mara Timberlake_*
