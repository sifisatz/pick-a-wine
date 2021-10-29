import {
  OPERATOR
} from "./operator";
import 
  WineBarIcon
 from '@mui/icons-material/WineBar';

export const OPERATORS = {
  [OPERATOR.LANGUAGE]: [{
      label: 'Dansk',
      value: 'Dansk',
    },
    {
      label: 'Deutsch',
      value: 'Deutsch',
    },
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Español',
      value: 'Español',
    },
    {
      label: 'Français',
      value: 'Français',
    },
    {
      label: 'Italiano',
      value: 'Italiano',
    },
    {
      label: 'Greek',
      value: 'Greek',
    },
  ],
  [OPERATOR.MENU]: [{
      label: 'Wines',
      avatarIcon: (<WineBarIcon/>),
      
    },
    {
      label: 'Pairing',
    },
    {
      label: 'Grapes',
    },
    {
      label: 'Regions',
    },
    {
      label: 'Awards',
    },

  ]

}