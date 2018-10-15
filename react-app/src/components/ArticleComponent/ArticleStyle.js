import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $darkGray } from "../../style/variabelsColor";

export default StyleSheet.create({
  wrapper: {
    borderBottom: `1px solid ${$lightGray}`,
    paddingBottom: 20
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0'
  },
  title: {
    margin: 0
  },
  img: {
    width: '100%',
    maxWidth: 500,
    float: 'left',
    marginRight: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: 0
  },
  date: {
    fontSize: 12,
    color: $darkGray,
    fontWeight: 'bold'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0'
  },
  btnContent: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    color: $darkGray
  }
})