import { StyleSheet } from 'aphrodite/no-important';

import { $darkGray } from "../../style/variabelsColor";

export default StyleSheet.create({
  wrapper: {
    width:350,
    padding: '0 20px'
  },
  img: {
    maxWidth: '100%',
    borderRadius: '50%'
  },
  text: {
    textAlign: 'justify',
    color: $darkGray
  }
})