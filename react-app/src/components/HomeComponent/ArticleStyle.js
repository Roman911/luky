import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $lightGray, $darkGray } from "../../style/variabelsColor";

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
    fontWeight: '600'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0'
  },
  tag: {
    backgroundColor: $darkWhite,
    padding: '5px 10px',
    marginRight: 10,
    fontSize: 13
  },
  btnContent: {
    display: 'flex',
    justifyContent: 'center'
  },
  btn: {
    border: `2px solid ${$darkGray}`,
    padding: '7px 20px',
    background: 'transparent',
    transition: '300ms',
    cursor: 'pointer',
    ':hover': {
      background: $darkGray,
      color: $darkWhite
    }
  },
  link: {
    color: $darkGray
  }
})