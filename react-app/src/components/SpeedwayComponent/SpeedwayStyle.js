import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $darkGray } from "../../style/variabelsColor";

export default StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  top: {
    textAlign: 'center',
    padding: 20
  },
  link: {
    color: $darkGray,
    padding: '5px 20px',
    margin: '0 10px',
    backgroundColor: $darkWhite
  }
})