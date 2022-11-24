import Motorcycle from '../../assets/QuizCat/motorcycle.svg';
import Car from '../../assets/QuizCat/car.svg';
import Bus from '../../assets/QuizCat/bus.svg';
import Truck from '../../assets/QuizCat/truck.png';
import Trailer from '../../assets/QuizCat/trailer.png';
import Id from '../../assets/QuizCat/id.png';

import ChestionarImage from '../../assets/chestionar-normal.svg';

export const ChestionareTopics = [
  {
    title: 'Categoria A',
    icon: Motorcycle,
    width: 150,
    key: 'categoria-A',
    quizID: 'categoria-A',
  },
  {
    title: 'Categoria B',
    icon: Car,
    width: 150,
    key: 'categoria-B',
    quizID: 'categoria-B',
  },
  {
    title: 'Categoria C',
    icon: Truck,
    width: 100,
    key: 'categoria-C',
    quizID: 'categoria-C',
  },
  {
    title: 'Categoria D',
    icon: Bus,
    width: 120,
    key: 'categoria-D',
    quizID: 'categoria-D',
  },
  {
    title: 'Categoria E',
    icon: Trailer,
    width: 100,
    key: 'categoria-E',
    quizID: 'categoria-E',
  },
  {
    title: 'Redobândire permis',
    icon: Id,
    width: 100,
    key: 'redobandire-permise',
    quizID: 'redobandire-permis',
  },
];

interface Quiz {
  [key: string]: {
    title: string;
    link: string;
    key: string;
    image: string;
  }[];
}

export const QuizTypes: Quiz[] = [
  {
    'categoria-A': [
      {
        title: 'Chestionar auto',
        link: 'categoria-A',
        key: 'catA',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'categoria-A-mediu-de-invatare',
        key: 'catA-mediu',
        image: ChestionarImage,
      },
    ],

    'categoria-B': [
      {
        title: 'Chestionar auto',
        link: 'categoria-B',
        key: 'catB',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'categoria-B-mediu-de-invatare',
        key: 'catB-mediu',
        image: ChestionarImage,
      },
    ],

    'categoria-C': [
      {
        title: 'Chestionar auto',
        link: 'categoria-C',
        key: 'catC',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'categoria-C-mediu-de-invatare',
        key: 'catC-mediu',
        image: ChestionarImage,
      },
    ],

    'categoria-D': [
      {
        title: 'Chestionar auto',
        link: 'categoria-D',
        key: 'catD',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'categoria-D-mediu-de-invatare',
        key: 'catD-mediu',
        image: ChestionarImage,
      },
    ],

    'categoria-E': [
      {
        title: 'Chestionar auto',
        link: 'categoria-E',
        key: 'catE',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'categoria-E-mediu-de-invatare',
        key: 'catE-mediu',
        image: ChestionarImage,
      },
    ],

    'redobandire-permis': [
      {
        title: 'Chestionar auto',
        link: 'redobandire-permis',
        key: 'catR',
        image: ChestionarImage,
      },
      {
        title: 'Mediu de invatare',
        link: 'redobandire-permis-mediu-de-invatare',
        key: 'catR-mediu',
        image: ChestionarImage,
      },
    ],
  },
];

export const QuizMessages = {
  'categoria-A': {
    mainMessage:
      'Chestionarele auto din categoria A conțin 20 de întrebări cu un timp alocat de 20 de minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 17 întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
  'categoria-B': {
    mainMessage:
      'Chestionarele auto din categoria B conțin 26 de întrebări cu un timp alocat de 30 de minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 22 de întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
  'categoria-C': {
    mainMessage:
      'Chestionarele auto din categoria C conțin 26 de întrebări cu un timp alocat de 30 de minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 22 de întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
  'categoria-D': {
    mainMessage:
      'Chestionarele auto din Categoria D conțin 26 de întrebări cu un timp alocat de 30 de minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 22 de întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
  'categoria-E': {
    mainMessage:
      'Chestionarele auto din Categoria E conțin 11 întrebări cu un timp alocat de 15 minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 9 întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
  'redobandire-permis': {
    mainMessage:
      'Chestionarele auto pentru redobândirea permisului de conducere conțin 15 întrebări cu un timp alocat de 30 de minute. Pentru a fi declarat admis este necesar să răspundeți corect la cel puțin 13 întrebări. Dacă părăsiți chestionarul auto progresul va fi salvat și puteți reveni oricând la acesta. La finalul chestionarului auto aveți posibilitatea de a revedea întrebările parcurse și răspunsurile oferite.',
  },
};
