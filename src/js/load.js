import * as dbPersona from './db/persona';
import * as utils from './utils';
import getRefs from './getRefs';

import contactsTemplaters from '../templates/persona/contacts.hbs'

(function load() {
    const language = utils.getLanguage();
    const refs = getRefs();
console.log(refs);
    refs.contacts.innerHTML = contactsTemplaters(dbPersona.contacts[language])

    console.log(contactsTemplaters(dbPersona.contacts[language]));
    console.log(dbPersona);
    console.log(dbPersona.techSkills);
})()