import { StyleSheet } from 'aphrodite/no-important';

import {$darkGray} from "../../style/variabelsColor";

export default StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0'
  },
  title: {
    fontSize: 24
  },
  img: {
    width: '100%',
    maxWidth: 500,
    float: 'left',
    marginRight: 20,
    cursor: 'pointer'
  },
  img2: {
    maxWidth: '50%',
    padding: 7,
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  imgContent: {
    width: '100%',
    marginRight: 20,
    cursor: 'pointer'
  },
  text: {
    fontSize: 18,
    lineHeight: 1.6,
    textAlign: 'justify'
  },
  blockImg: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    fontSize: 12,
    color: $darkGray,
    fontWeight: '600'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0'
  }
})